// Durable Object for managing racing room state
import { DurableObject } from "cloudflare:workers";

interface Player {
  id: string;
  username: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  lap: number;
  checkpoints: number[];
  finishTime?: number;
  isReady: boolean;
}

interface RaceState {
  roomCode: string;
  hostId: string;
  status: "waiting" | "countdown" | "racing" | "finished";
  players: Player[];
  startTime?: number;
  countdownStart?: number;
  laps: number;
  trackLength: number;
}

export class RacingRoom {
  private state: DurableObjectState;
  private env: any;
  private sessions: Map<WebSocket, string>; // WebSocket -> playerId mapping
  private raceState?: RaceState;
  private updateInterval?: number;

  constructor(state: DurableObjectState, env: any) {
    this.state = state;
    this.env = env;
    this.sessions = new Map();

    // Block concurrent requests during initialization
    this.state.blockConcurrencyWhile(async () => {
      this.raceState = await this.state.storage.get<RaceState>('raceState');
    });
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers for all responses
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Upgrade, Connection, Sec-WebSocket-Key, Sec-WebSocket-Version',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    // Handle WebSocket upgrade
    if (request.headers.get("Upgrade") === "websocket") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);

      await this.handleSession(server as any);

      return new Response(null, {
        status: 101,
        webSocket: client,
        headers: corsHeaders,
      });
    }

    // Handle HTTP requests (for initialization - EXACTLY like GameRoom)
    if (request.method === "POST") {
      const body = await request.json() as any;

      if (body.action === 'init') {
        await this.initializeRoom(body.roomCode, body.username, body.userId);
        return new Response(JSON.stringify({ success: true }), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        });
      }
    }

    return new Response("Not found", {
      status: 404,
      headers: corsHeaders
    });
  }

  async initializeRoom(roomCode: string, username: string, userId: string): Promise<void> {
    // Only initialize once - EXACTLY like GameRoom
    if (!this.raceState) {
      this.raceState = {
        roomCode,
        status: 'waiting',
        hostId: userId, // Set the creator as host
        players: [{
          id: userId,
          username,
          position: { x: 0, y: 0.5, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          velocity: { x: 0, y: 0, z: 0 },
          lap: 0,
          checkpoints: [],
          isReady: false,
        }],
        laps: 3,
        trackLength: 1000,
      };

      await this.state.storage.put('raceState', this.raceState);
      console.log('🏁 Room initialized:', roomCode, 'Host:', userId);
    }
  }

  async handleSession(webSocket: WebSocket): Promise<void> {
    this.state.acceptWebSocket(webSocket);
    console.log('WebSocket connected, total sessions:', this.sessions.size);

    let playerId: string | undefined;

    webSocket.addEventListener('message', async (msg) => {
      try {
        const data = JSON.parse(msg.data as string);
        console.log('Received message:', data.type, 'from player:', data.playerId || 'unknown');

        switch (data.type) {
          case 'join':
            playerId = await this.handleJoin(webSocket, data.username, data.playerId);
            console.log('Player joined:', playerId, 'total sessions:', this.sessions.size);
            break;
          case 'ready':
            await this.handleReady(data.playerId, data.ready);
            break;
          case 'start_race':
            await this.handleStartRace(data.playerId);
            break;
          case 'position_update':
            await this.handlePositionUpdate(data.playerId, data.position, data.rotation, data.velocity);
            break;
          case 'leave':
            await this.handleLeave(data.playerId);
            break;
        }
      } catch (error: any) {
        console.error('Message handling error:', error);
        webSocket.send(JSON.stringify({
          type: 'error',
          message: error.message
        }));
      }
    });

    webSocket.addEventListener('close', () => {
      if (playerId) {
        this.sessions.delete(webSocket);
        console.log('Player disconnected:', playerId, 'remaining sessions:', this.sessions.size);
      }
    });
  }

  async handleJoin(ws: WebSocket, username: string, playerId?: string): Promise<string> {
    if (!this.raceState) {
      throw new Error('Room not initialized');
    }

    console.log('🏁 handleJoin called:', { username, playerId, roomCode: this.raceState.roomCode });

    // Generate playerId if not provided
    const playerIdToUse = playerId || this.generateId();

    // Check if player already exists
    const existingPlayer = this.raceState.players.find(p => p.id === playerIdToUse);

    // Only reject NEW players if race is in progress
    if (!existingPlayer && this.raceState.status !== 'waiting') {
      throw new Error('Race already in progress');
    }

    if (this.raceState.players.length >= 8 && !existingPlayer) {
      throw new Error('Room is full');
    }

    const isNewPlayer = !existingPlayer;

    if (isNewPlayer) {
      this.raceState.players.push({
        id: playerIdToUse,
        username,
        position: { x: 0, y: 0.5, z: this.raceState.players.length * 5 },
        rotation: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        lap: 0,
        checkpoints: [],
        isReady: false,
      });

      await this.state.storage.put('raceState', this.raceState);
    }

    // CRITICAL: Add to sessions BEFORE sending any messages
    this.sessions.set(ws, playerIdToUse);
    console.log(`✅ Added player ${playerIdToUse} (${username}) to sessions. Total sessions: ${this.sessions.size}`);

    // Send current game state to the joining player
    const joinResponse = {
      type: 'joined',
      room: {
        code: this.raceState.roomCode,
        status: this.raceState.status,
        players: this.raceState.players.map(p => ({
          id: p.id,
          username: p.username,
          lap: p.lap,
          isReady: p.isReady,
          finishTime: p.finishTime,
        })),
        hostId: this.raceState.hostId,
        laps: this.raceState.laps,
      },
      user: existingPlayer || this.raceState.players[this.raceState.players.length - 1],
    };
    
    console.log('📤 Sending joined response:', JSON.stringify(joinResponse, null, 2));
    ws.send(JSON.stringify(joinResponse));

    // Broadcast to ALL players
    console.log(`Broadcasting player_joined. Players: ${this.raceState.players.map(p => p.username).join(', ')}`);
    this.broadcast({
      type: 'player_joined',
      players: this.raceState.players.map(p => ({
        id: p.id,
        username: p.username,
        lap: p.lap,
        isReady: p.isReady,
        finishTime: p.finishTime,
      })),
      hostId: this.raceState.hostId,
    });

    return playerIdToUse;
  }

  async handleReady(playerId: string, ready: boolean): Promise<void> {
    if (!this.raceState) {
      throw new Error('Room not initialized');
    }

    const player = this.raceState.players.find(p => p.id === playerId);
    if (player) {
      player.isReady = ready;
      await this.state.storage.put('raceState', this.raceState);

      this.broadcast({
        type: 'player_ready',
        playerId,
        ready,
      });

      this.broadcastState();
    }
  }

  async handleStartRace(playerId: string): Promise<void> {
    if (!this.raceState) {
      throw new Error('Room not initialized');
    }

    // Only host can start
    if (playerId !== this.raceState.hostId) {
      throw new Error('Only host can start race');
    }

    // Check if all players are ready
    const allReady = this.raceState.players.every((p) => p.isReady);
    if (!allReady) {
      throw new Error('Not all players are ready');
    }

    if (this.raceState.players.length < 2) {
      throw new Error('Need at least 2 players');
    }

    // Start countdown
    this.raceState.status = "countdown";
    this.raceState.countdownStart = Date.now();

    await this.state.storage.put('raceState', this.raceState);

    this.broadcast({
      type: "countdown_start",
      countdown: 3,
    });

    // Start race after countdown
    setTimeout(async () => {
      if (!this.raceState) return;

      this.raceState.status = "racing";
      this.raceState.startTime = Date.now();

      // Reset all players to starting positions
      let zOffset = 0;
      for (const player of this.raceState.players) {
        player.position = { x: 0, y: 0.5, z: zOffset };
        player.rotation = { x: 0, y: 0, z: 0 };
        player.velocity = { x: 0, y: 0, z: 0 };
        player.lap = 0;
        player.checkpoints = [];
        player.finishTime = undefined;
        zOffset += 5;
      }

      await this.state.storage.put('raceState', this.raceState);

      this.broadcast({
        type: "round_started",
        startTime: this.raceState.startTime,
      });

      this.broadcastState();
      this.startPhysicsLoop();
    }, 3000);
  }

  async handlePositionUpdate(playerId: string, position: any, rotation: any, velocity: any): Promise<void> {
    if (!this.raceState || this.raceState.status !== 'racing') return;

    const player = this.raceState.players.find(p => p.id === playerId);
    if (!player) return;

    player.position = position;
    player.rotation = rotation;
    player.velocity = velocity;

    // Check lap completion (simplified - crossing z=0 plane)
    if (position.z < -this.raceState.trackLength && player.checkpoints.length >= 3) {
      player.lap++;
      player.checkpoints = [];

      this.broadcast({
        type: "lap_complete",
        playerId,
        lap: player.lap,
      });

      // Check race finish
      if (player.lap >= this.raceState.laps) {
        player.finishTime = Date.now() - (this.raceState.startTime || 0);

        this.broadcast({
          type: "player_finished",
          playerId,
          finishTime: player.finishTime,
        });

        // Check if all players finished
        const allFinished = this.raceState.players.every(
          (p) => p.finishTime !== undefined
        );

        if (allFinished) {
          this.raceState.status = "finished";
          this.stopPhysicsLoop();

          // Calculate final standings
          const standings = this.raceState.players
            .map((p) => ({
              playerId: p.id,
              username: p.username,
              finishTime: p.finishTime || 999999,
            }))
            .sort((a, b) => a.finishTime - b.finishTime);

          this.broadcast({
            type: "round_result",
            standings,
          });

          await this.state.storage.put('raceState', this.raceState);
        }
      }
    }

    // Track checkpoints (simplified grid)
    const checkpointIndex = Math.floor(-position.z / (this.raceState.trackLength / 4));
    if (checkpointIndex > 0 && !player.checkpoints.includes(checkpointIndex)) {
      player.checkpoints.push(checkpointIndex);
    }
  }

  async handleLeave(playerId: string): Promise<void> {
    if (!this.raceState) return;

    this.raceState.players = this.raceState.players.filter(p => p.id !== playerId);

    // If host left, assign new host
    if (playerId === this.raceState.hostId && this.raceState.players.length > 0) {
      this.raceState.hostId = this.raceState.players[0].id;
    }

    await this.state.storage.put('raceState', this.raceState);

    this.broadcast({
      type: 'player_left',
      playerId,
    });

    this.broadcastState();
  }

  private startPhysicsLoop() {
    if (this.updateInterval) return;

    // Broadcast position updates at 20 FPS
    this.updateInterval = setInterval(() => {
      if (this.raceState && this.raceState.status === "racing") {
        const positions = this.raceState.players.map((p) => ({
          playerId: p.id,
          position: p.position,
          rotation: p.rotation,
          velocity: p.velocity,
          lap: p.lap,
        }));

        this.broadcast({
          type: "position_sync",
          positions,
          timestamp: Date.now(),
        });
      }
    }, 50) as unknown as number;
  }

  private stopPhysicsLoop() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = undefined;
    }
  }

  private broadcast(message: any) {
    const msg = JSON.stringify(message);
    console.log(`Broadcasting to ${this.sessions.size} sessions:`, message.type);
    
    for (const ws of this.sessions.keys()) {
      try {
        ws.send(msg);
      } catch (error) {
        console.error("Error broadcasting:", error);
      }
    }
  }

  private broadcastState() {
    if (!this.raceState) return;

    const players = this.raceState.players.map((p) => ({
      id: p.id,
      username: p.username,
      lap: p.lap,
      isReady: p.isReady,
      finishTime: p.finishTime,
    }));

    this.broadcast({
      type: "state_update",
      state: {
        code: this.raceState.roomCode,
        hostId: this.raceState.hostId,
        status: this.raceState.status,
        players,
        laps: this.raceState.laps,
      },
    });
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
