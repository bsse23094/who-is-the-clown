// Durable Object for managing game room state (replaces MongoDB)
import { judgeWithAI, judgeWithLogic, judgeWithRandom, tallyVotes } from '../services/judgeService';
import { getRandomPrompt } from '../utils/prompts';

interface Player {
  id: string;
  username: string;
  score: number;
  clownCount: number;
}

interface Answer {
  userId: string;
  text: string;
}

interface Vote {
  voterId: string;
  votedForId: string;
}

interface Round {
  id: string;
  prompt: string;
  answers: Answer[];
  votes: Vote[];
  judgeMethod: 'ai' | 'vote' | 'random' | 'logic';
  clownUserId?: string;
  roast?: string;
}

interface GameState {
  roomCode: string;
  status: 'waiting' | 'in_progress' | 'finished';
  players: Player[];
  hostId: string; // ID of the player who created the room
  currentRound?: Round;
  roundHistory: Round[];
}

export class GameRoom {
  private state: DurableObjectState;
  private env: any;
  private sessions: Map<WebSocket, string>; // WebSocket -> userId mapping
  private gameState?: GameState;

  constructor(state: DurableObjectState, env: any) {
    this.state = state;
    this.env = env;
    this.sessions = new Map();
    
    // Block concurrent requests during initialization
    this.state.blockConcurrencyWhile(async () => {
      this.gameState = await this.state.storage.get<GameState>('gameState');
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
    if (request.headers.get('Upgrade') === 'websocket') {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);

      await this.handleSession(server as any);

      return new Response(null, {
        status: 101,
        webSocket: client,
        headers: corsHeaders,
      });
    }

    // Handle HTTP requests (for initialization)
    if (request.method === 'POST') {
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

    return new Response('Not Found', { 
      status: 404,
      headers: corsHeaders 
    });
  }

  async initializeRoom(roomCode: string, username: string, userId: string): Promise<void> {
    if (!this.gameState) {
      this.gameState = {
        roomCode,
        status: 'waiting',
        hostId: userId, // Set the room creator as host
        players: [{
          id: userId,
          username,
          score: 0,
          clownCount: 0,
        }],
        roundHistory: [],
      };
      
      await this.state.storage.put('gameState', this.gameState);
    }
  }

  async handleSession(webSocket: WebSocket): Promise<void> {
    webSocket.accept();
    console.log('WebSocket connected, total sessions:', this.sessions.size);

    let userId: string | undefined;

    webSocket.addEventListener('message', async (msg) => {
      try {
        const data = JSON.parse(msg.data as string);
        console.log('Received message:', data.type, 'from user:', data.userId || 'unknown');
        
        switch (data.type) {
          case 'join':
            userId = await this.handleJoin(webSocket, data.username, data.userId);
            console.log('User joined:', userId, 'total sessions:', this.sessions.size);
            break;
          case 'start_round':
            await this.handleStartRound(data.userId, data.judgeMode);
            break;
          case 'submit_answer':
            await this.handleSubmitAnswer(data.userId, data.text);
            break;
          case 'submit_vote':
            await this.handleSubmitVote(data.voterId, data.votedForId);
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

    webSocket.addEventListener('close', async () => {
      if (userId) {
        this.sessions.delete(webSocket);
        console.log('User disconnected:', userId, 'remaining sessions:', this.sessions.size);
        
        // Handle player disconnect - remove from game
        await this.handlePlayerDisconnect(userId);
      }
    });
  }

  async handleJoin(ws: WebSocket, username: string, userId?: string): Promise<string> {
    if (!this.gameState) {
      throw new Error('Room not initialized');
    }

    // Generate userId if not provided (for new players joining existing room)
    const playerId = userId || this.generateId();
    
    // Check if player already exists
    const existingPlayer = this.gameState.players.find(p => p.id === playerId);
    
    // Only reject NEW players if game is in progress
    if (!existingPlayer && this.gameState.status !== 'waiting') {
      throw new Error('Room is not accepting new players');
    }
    
    const isNewPlayer = !existingPlayer;
    
    if (isNewPlayer) {
      this.gameState.players.push({
        id: playerId,
        username,
        score: 0,
        clownCount: 0,
      });
      
      await this.state.storage.put('gameState', this.gameState);
    }

    // CRITICAL: Add to sessions BEFORE sending any messages
    this.sessions.set(ws, playerId);
    console.log(`Added player ${playerId} (${username}) to sessions. Total sessions: ${this.sessions.size}`);

    // Send current game state to the joining player
    ws.send(JSON.stringify({
      type: 'joined',
      room: {
        code: this.gameState.roomCode,
        status: this.gameState.status,
        players: this.gameState.players,
        hostId: this.gameState.hostId, // Include hostId
      },
      user: existingPlayer || this.gameState.players[this.gameState.players.length - 1],
    }));

    // Broadcast to ALL players (including the one that just joined for consistency)
    console.log(`Broadcasting player_joined. Players: ${this.gameState.players.map(p => p.username).join(', ')}`);
    this.broadcast({
      type: 'player_joined',
      players: this.gameState.players,
      hostId: this.gameState.hostId, // Include hostId in broadcast
    });

    return playerId;
  }

  async handleStartRound(userId: string, judgeMode: 'ai' | 'vote' | 'random' | 'logic' = 'ai'): Promise<void> {
    if (!this.gameState) {
      throw new Error('Room not initialized');
    }

    // Only the host can start the round
    if (userId !== this.gameState.hostId) {
      throw new Error('Only the host can start the round');
    }

    if (this.gameState.players.length < 2) {
      throw new Error('Need at least 2 players to start');
    }

    const roundId = this.generateId();
    const prompt = getRandomPrompt();

    this.gameState.currentRound = {
      id: roundId,
      prompt,
      answers: [],
      votes: [],
      judgeMethod: judgeMode,
    };

    this.gameState.status = 'in_progress';
    await this.state.storage.put('gameState', this.gameState);

    console.log(`Host ${userId} started round. Broadcasting to ${this.sessions.size} players`);
    this.broadcast({
      type: 'round_started',
      roundId,
      prompt,
      judgeMode,
      timer: 30,
    });
  }

  async handleSubmitAnswer(userId: string, text: string): Promise<void> {
    if (!this.gameState?.currentRound) {
      throw new Error('No active round');
    }

    // Check if user already answered
    if (this.gameState.currentRound.answers.some(a => a.userId === userId)) {
      throw new Error('Already answered');
    }

    this.gameState.currentRound.answers.push({ userId, text });
    await this.state.storage.put('gameState', this.gameState);

    // Broadcast answer update
    this.broadcast({
      type: 'answer_update',
      answeredUserIds: this.gameState.currentRound.answers.map(a => a.userId),
    });

    // Check if all players answered
    if (this.gameState.currentRound.answers.length >= this.gameState.players.length) {
      if (this.gameState.currentRound.judgeMethod === 'vote') {
        // Start voting phase
        this.broadcast({
          type: 'voting_started',
          answers: this.gameState.currentRound.answers,
        });
      } else {
        // Auto-judge with AI/logic/random
        await this.judgeRound();
      }
    }
  }

  async handleSubmitVote(voterId: string, votedForId: string): Promise<void> {
    if (!this.gameState?.currentRound) {
      throw new Error('No active round');
    }

    if (this.gameState.currentRound.judgeMethod !== 'vote') {
      throw new Error('Not in voting mode');
    }

    // Can't vote for yourself
    if (voterId === votedForId) {
      throw new Error('Cannot vote for yourself');
    }

    // Check if user already voted
    const existingVoteIndex = this.gameState.currentRound.votes.findIndex(v => v.voterId === voterId);
    if (existingVoteIndex >= 0) {
      // Update vote
      this.gameState.currentRound.votes[existingVoteIndex].votedForId = votedForId;
    } else {
      this.gameState.currentRound.votes.push({ voterId, votedForId });
    }

    await this.state.storage.put('gameState', this.gameState);

    this.broadcast({
      type: 'vote_update',
      votedUserIds: this.gameState.currentRound.votes.map(v => v.voterId),
    });

    // Check if all players voted
    if (this.gameState.currentRound.votes.length >= this.gameState.players.length) {
      await this.judgeRound();
    }
  }

  async judgeRound(): Promise<void> {
    if (!this.gameState?.currentRound) {
      throw new Error('No active round');
    }

    let clownUserId: string;
    let roast: string;
    let method: string;

    if (this.gameState.currentRound.judgeMethod === 'vote') {
      // Tally votes
      const result = tallyVotes(
        this.gameState.currentRound.votes,
        this.gameState.currentRound.answers
      );
      clownUserId = result.clownUserId;
      roast = result.roast;
      method = 'vote';
    } else if (this.gameState.currentRound.judgeMethod === 'ai') {
      const result = await judgeWithAI(
        this.gameState.currentRound.answers,
        this.gameState.currentRound.prompt,
        this.env.GEMINI_API_KEY
      );
      clownUserId = result.clownUserId;
      roast = result.roast;
      method = 'ai';
    } else if (this.gameState.currentRound.judgeMethod === 'random') {
      const result = judgeWithRandom(this.gameState.currentRound.answers);
      clownUserId = result.clownUserId;
      roast = result.roast;
      method = 'random';
    } else {
      const result = judgeWithLogic(this.gameState.currentRound.answers);
      clownUserId = result.clownUserId;
      roast = result.roast;
      method = 'logic';
    }

    // Update scores
    const clownPlayer = this.gameState.players.find(p => p.id === clownUserId);
    if (clownPlayer) {
      clownPlayer.score += 1;
      clownPlayer.clownCount += 1;
    }

    this.gameState.currentRound.clownUserId = clownUserId;
    this.gameState.currentRound.roast = roast;

    // Move to history
    this.gameState.roundHistory.push(this.gameState.currentRound);
    this.gameState.currentRound = undefined;
    this.gameState.status = 'waiting';

    await this.state.storage.put('gameState', this.gameState);

    // Broadcast results
    this.broadcast({
      type: 'round_result',
      clownUserId,
      roast,
      method,
      clownUsername: clownPlayer?.username,
      answers: this.gameState.roundHistory[this.gameState.roundHistory.length - 1].answers,
      scoreboard: this.gameState.players.map(p => ({
        username: p.username,
        score: p.score,
        clownCount: p.clownCount,
      })),
    });
  }

  broadcast(message: any): void {
    const messageStr = JSON.stringify(message);
    let successCount = 0;
    let failCount = 0;
    
    this.sessions.forEach((userId, ws) => {
      try {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(messageStr);
          successCount++;
        } else {
          failCount++;
        }
      } catch (error) {
        failCount++;
        console.error('Broadcast error to user', userId, ':', error);
      }
    });
    
    console.log(`Broadcast ${message.type}: ${successCount} sent, ${failCount} failed, ${this.sessions.size} total sessions`);
  }

  async handlePlayerDisconnect(userId: string): Promise<void> {
    if (!this.gameState) return;

    console.log('Handling disconnect for user:', userId);
    
    // Find player
    const playerIndex = this.gameState.players.findIndex(p => p.id === userId);
    if (playerIndex === -1) return;

    const wasHost = this.gameState.hostId === userId;
    
    // Remove player
    this.gameState.players.splice(playerIndex, 1);
    
    // If no players left, room will be cleaned up by Durable Object garbage collection
    if (this.gameState.players.length === 0) {
      console.log('No players left, room will be garbage collected');
      this.gameState = undefined;
      await this.state.storage.deleteAll();
      return;
    }
    
    // If only 1 player left and in a round, end the round
    if (this.gameState.players.length === 1 && this.gameState.currentRound) {
      console.log('Only 1 player remaining, ending current round');
      this.gameState.currentRound = undefined;
      this.gameState.status = 'waiting';
      await this.state.storage.put('gameState', this.gameState);
      
      this.broadcast({
        type: 'round_ended',
        reason: 'Not enough players to continue',
      });
    }
    
    // If host left, assign new host (first player in list)
    if (wasHost) {
      this.gameState.hostId = this.gameState.players[0].id;
      console.log('New host assigned:', this.gameState.hostId, this.gameState.players[0].username);
      
      // Notify everyone about host change
      this.broadcast({
        type: 'host_changed',
        newHostId: this.gameState.hostId,
        newHostName: this.gameState.players[0].username,
      });
    }
    
    // Save updated state
    await this.state.storage.put('gameState', this.gameState);
    
    // Notify remaining players
    this.broadcast({
      type: 'player_left',
      userId,
      players: this.gameState.players,
    });
    
    // If we're in a round, check if we can continue
    if (this.gameState.currentRound) {
      const currentRound = this.gameState.currentRound;
      
      // Remove disconnected player's answer/vote if exists
      currentRound.answers = currentRound.answers.filter(a => a.userId !== userId);
      currentRound.votes = currentRound.votes.filter(v => v.voterId !== userId && v.votedForId !== userId);
      
      // Save updated round state
      await this.state.storage.put('gameState', this.gameState);
      
      console.log('Round continues with remaining players. Checking if round should proceed...');
      
      // Check if all REMAINING players have answered
      if (currentRound.answers.length >= this.gameState.players.length) {
        console.log('All remaining players have answered. Proceeding to next phase.');
        
        if (currentRound.judgeMethod === 'vote') {
          // Check if we also have all votes
          if (currentRound.votes.length >= this.gameState.players.length) {
            console.log('All remaining players have voted. Judging round.');
            await this.judgeRound();
          } else {
            // Start/continue voting phase
            this.broadcast({
              type: 'voting_started',
              answers: currentRound.answers,
            });
          }
        } else {
          // Auto-judge with AI/logic/random
          console.log('Auto-judging round.');
          await this.judgeRound();
        }
      } else if (currentRound.judgeMethod === 'vote' && currentRound.votes.length >= this.gameState.players.length) {
        // All remaining players have voted
        console.log('All remaining players have voted. Judging round.');
        await this.judgeRound();
      } else {
        // Broadcast updated answer/vote status
        this.broadcast({
          type: 'answer_update',
          answeredUserIds: currentRound.answers.map(a => a.userId),
        });
        
        if (currentRound.judgeMethod === 'vote') {
          this.broadcast({
            type: 'vote_update',
            votedUserIds: currentRound.votes.map(v => v.voterId),
          });
        }
      }
    }
    
    console.log('Player disconnect handled successfully');
  }

  generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
