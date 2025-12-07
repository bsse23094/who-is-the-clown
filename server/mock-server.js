// Simple mock server for local development testing
// This allows you to test the UI without setting up Cloudflare Workers

const express = require('express');
const cors = require('cors');
const { Server } = require('ws');

const app = express();
const PORT = 8787;

app.use(cors());
app.use(express.json());

// In-memory storage for demo
const rooms = new Map();

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', serverless: true, mock: true });
});

// Create room
app.post('/api/rooms/create', (req, res) => {
  const { username } = req.body;
  
  if (!username?.trim()) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const roomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
  const userId = Math.random().toString(36).substring(2) + Date.now().toString(36);

  const room = {
    code: roomCode,
    players: [{ id: userId, username: username.trim(), score: 0 }],
    status: 'waiting'
  };

  rooms.set(roomCode, room);

  console.log(`✅ Room created: ${roomCode} by ${username}`);

  res.json({ 
    roomCode, 
    userId,
    username: username.trim()
  });
});

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(`🎮 Mock server running on http://localhost:${PORT}`);
  console.log(`📡 WebSocket server ready`);
  console.log(`\n🎯 You can now:`);
  console.log(`   1. Visit http://localhost:5173`);
  console.log(`   2. Create a room`);
  console.log(`   3. Test the UI\n`);
});

// WebSocket server for game communication
const wss = new Server({ server, path: /\/game\/.*/ });

// Track connections by room
const roomConnections = new Map();

// Broadcast to all clients in a room
function broadcastToRoom(roomCode, message) {
  const connections = roomConnections.get(roomCode) || [];
  const messageStr = JSON.stringify(message);
  connections.forEach(client => {
    if (client.readyState === 1) { // OPEN
      client.send(messageStr);
    }
  });
}

wss.on('connection', (ws, req) => {
  const roomCode = req.url.split('/').pop();
  console.log(`🔌 Client connected to room: ${roomCode}`);

  // Track this connection
  if (!roomConnections.has(roomCode)) {
    roomConnections.set(roomCode, []);
  }
  roomConnections.get(roomCode).push(ws);

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      console.log(`📨 Message:`, message.type);

      // Echo back for demo
      switch (message.type) {
        case 'join':
          // Get or create room
          let room = rooms.get(roomCode);
          if (!room) {
            room = { code: roomCode, players: [], status: 'waiting' };
            rooms.set(roomCode, room);
          }

          // Add player if not already in room
          const existingPlayer = room.players.find(p => p.id === message.userId);
          if (!existingPlayer) {
            room.players.push({
              id: message.userId,
              username: message.username,
              score: 0,
              clownCount: 0
            });
            console.log(`👤 ${message.username} joined room ${roomCode}`);
          }

          // Send room state to the joining player
          ws.send(JSON.stringify({
            type: 'joined',
            room: room,
            user: { _id: message.userId, username: message.username }
          }));

          // Broadcast to all players in room
          broadcastToRoom(roomCode, {
            type: 'player_joined',
            players: room.players
          });
          break;

        case 'start_round':
          const prompts = [
            "What's your superhero name and useless power?",
            "What's written on your tombstone?",
            "What's your excuse for being late?",
            "What's your WiFi password?",
            "What's the worst pickup line you know?"
          ];
          
          // Broadcast to all players
          broadcastToRoom(roomCode, {
            type: 'round_started',
            roundId: 'mock-' + Date.now(),
            prompt: prompts[Math.floor(Math.random() * prompts.length)],
            judgeMode: message.judgeMode || 'ai',
            timer: 30
          });
          break;

        case 'submit_answer':
          console.log(`💬 Answer submitted: "${message.text}"`);
          // In real version, this would trigger judging after all answers
          break;

        case 'submit_vote':
          console.log(`🗳️ Vote: ${message.voterId} voted for ${message.votedForId}`);
          break;
      }
    } catch (error) {
      console.error('❌ Error:', error.message);
      ws.send(JSON.stringify({ type: 'error', message: error.message }));
    }
  });

  ws.on('close', () => {
    console.log(`🔌 Client disconnected from room: ${roomCode}`);
    
    // Remove from room connections
    const connections = roomConnections.get(roomCode);
    if (connections) {
      const index = connections.indexOf(ws);
      if (index > -1) {
        connections.splice(index, 1);
      }
      if (connections.length === 0) {
        roomConnections.delete(roomCode);
      }
    }
  });
});

process.on('SIGTERM', () => {
  console.log('\n👋 Shutting down mock server...');
  server.close();
  process.exit(0);
});
