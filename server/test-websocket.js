// Test WebSocket connections and real-time updates
const WebSocket = require('ws');

const API_URL = 'https://who-is-the-clown.bsse23094.workers.dev';

console.log('🧪 Testing Real-Time Updates\n');

// Step 1: Create a room
async function createRoom() {
  const response = await fetch(`${API_URL}/api/rooms/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'Player1', mode: 'ai' })
  });
  
  const data = await response.json();
  console.log('✅ Room created:', data.roomCode);
  return data;
}

// Step 2: Connect Player 1
function connectPlayer(roomCode, username, userId) {
  return new Promise((resolve, reject) => {
    const wsUrl = API_URL.replace('https', 'wss') + `/game/${roomCode}`;
    console.log(`🔌 Connecting ${username} to ${wsUrl}`);
    
    const ws = new WebSocket(wsUrl);
    
    ws.on('open', () => {
      console.log(`✅ ${username} connected`);
      
      // Send join message
      ws.send(JSON.stringify({
        type: 'join',
        username: username,
        userId: userId
      }));
    });
    
    ws.on('message', (data) => {
      const message = JSON.parse(data);
      console.log(`📨 ${username} received:`, message.type);
      
      if (message.type === 'joined') {
        console.log(`  Players in room:`, message.room.players.map(p => p.username));
      }
      
      if (message.type === 'player_joined') {
        console.log(`  Updated players:`, message.players.map(p => p.username));
      }
    });
    
    ws.on('error', (error) => {
      console.error(`❌ ${username} error:`, error.message);
      reject(error);
    });
    
    ws.on('close', () => {
      console.log(`🔌 ${username} disconnected`);
    });
    
    resolve(ws);
  });
}

async function runTest() {
  try {
    // Create room with Player 1
    const room = await createRoom();
    
    // Connect Player 1
    const player1 = await connectPlayer(room.roomCode, 'Player1', room.userId);
    
    // Wait 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Connect Player 2
    console.log('\n🎮 Player 2 joining...\n');
    const player2 = await connectPlayer(room.roomCode, 'Player2', 'player2_' + Date.now());
    
    // Wait 3 seconds to see all messages
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Connect Player 3
    console.log('\n🎮 Player 3 joining...\n');
    const player3 = await connectPlayer(room.roomCode, 'Player3', 'player3_' + Date.now());
    
    // Wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('\n✅ Test complete - check if all players saw updates\n');
    
    // Close connections
    player1.close();
    player2.close();
    player3.close();
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

runTest();
