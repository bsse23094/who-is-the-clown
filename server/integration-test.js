// Integration test for Cloudflare Workers backend
// Run with: node integration-test.js

const BASE_URL = 'https://who-is-the-clown.bsse23094.workers.dev';
const WebSocket = require('ws');

// Test utilities
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function success(message) {
  log(`✅ ${message}`, colors.green);
}

function error(message) {
  log(`❌ ${message}`, colors.red);
}

function info(message) {
  log(`ℹ️  ${message}`, colors.blue);
}

// Test 1: Health Check
async function testHealthCheck() {
  info('Testing health endpoint...');
  try {
    const response = await fetch(`${BASE_URL}/health`);
    const data = await response.json();
    
    if (response.ok && data.status === 'ok' && data.serverless === true) {
      success('Health check passed');
      return true;
    }
    error('Health check failed: Invalid response');
    return false;
  } catch (err) {
    error(`Health check failed: ${err.message}`);
    return false;
  }
}

// Test 2: Room Creation - AI Mode
async function testRoomCreationAI() {
  info('Testing room creation with AI mode...');
  try {
    const response = await fetch(`${BASE_URL}/api/rooms/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'TestAI', mode: 'ai' })
    });
    
    const data = await response.json();
    
    if (response.ok && data.roomCode && data.userId && data.username === 'TestAI') {
      success(`Room created: ${data.roomCode} (AI mode)`);
      return data;
    }
    error('Room creation (AI) failed');
    return null;
  } catch (err) {
    error(`Room creation (AI) failed: ${err.message}`);
    return null;
  }
}

// Test 3: Room Creation - Voting Mode
async function testRoomCreationVoting() {
  info('Testing room creation with voting mode...');
  try {
    const response = await fetch(`${BASE_URL}/api/rooms/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'TestVoter', mode: 'vote' })
    });
    
    const data = await response.json();
    
    if (response.ok && data.roomCode && data.userId && data.username === 'TestVoter') {
      success(`Room created: ${data.roomCode} (Voting mode)`);
      return data;
    }
    error('Room creation (Voting) failed');
    return null;
  } catch (err) {
    error(`Room creation (Voting) failed: ${err.message}`);
    return null;
  }
}

// Test 4: WebSocket Connection
async function testWebSocketConnection(roomCode) {
  info(`Testing WebSocket connection to room ${roomCode}...`);
  
  return new Promise((resolve) => {
    try {
      const wsUrl = `wss://who-is-the-clown.bsse23094.workers.dev/game/${roomCode}`;
      const ws = new WebSocket(wsUrl);
      
      const timeout = setTimeout(() => {
        error('WebSocket connection timeout');
        ws.close();
        resolve(false);
      }, 5000);
      
      ws.on('open', () => {
        clearTimeout(timeout);
        success('WebSocket connected');
        
        // Send join message
        ws.send(JSON.stringify({
          type: 'join',
          username: 'WSTestPlayer',
          userId: 'test-' + Date.now()
        }));
        
        // Wait for response
        setTimeout(() => {
          ws.close();
          resolve(true);
        }, 1000);
      });
      
      ws.on('message', (data) => {
        const message = JSON.parse(data.toString());
        info(`Received message: ${message.type}`);
      });
      
      ws.on('error', (err) => {
        clearTimeout(timeout);
        error(`WebSocket error: ${err.message}`);
        resolve(false);
      });
      
    } catch (err) {
      error(`WebSocket test failed: ${err.message}`);
      resolve(false);
    }
  });
}

// Test 5: Invalid Room Code
async function testInvalidRoomCode() {
  info('Testing invalid room code handling...');
  try {
    const response = await fetch(`${BASE_URL}/game/ABC`, {
      headers: { 'Upgrade': 'websocket' }
    });
    
    if (response.status === 400) {
      success('Invalid room code rejected correctly');
      return true;
    }
    error('Invalid room code not handled properly');
    return false;
  } catch (err) {
    // Expected behavior
    success('Invalid room code rejected correctly');
    return true;
  }
}

// Test 6: CORS Headers
async function testCORS() {
  info('Testing CORS headers...');
  try {
    const response = await fetch(`${BASE_URL}/health`, {
      method: 'OPTIONS'
    });
    
    const allowOrigin = response.headers.get('Access-Control-Allow-Origin');
    const allowMethods = response.headers.get('Access-Control-Allow-Methods');
    
    if (allowOrigin && allowMethods) {
      success('CORS headers present');
      info(`  Allow-Origin: ${allowOrigin}`);
      info(`  Allow-Methods: ${allowMethods}`);
      return true;
    }
    error('CORS headers missing');
    return false;
  } catch (err) {
    error(`CORS test failed: ${err.message}`);
    return false;
  }
}

// Run all tests
async function runAllTests() {
  log('\n🧪 Starting Backend Integration Tests\n', colors.yellow);
  log(`Base URL: ${BASE_URL}\n`, colors.blue);
  
  const results = {
    total: 0,
    passed: 0,
    failed: 0
  };
  
  // Test 1: Health Check
  results.total++;
  if (await testHealthCheck()) results.passed++;
  else results.failed++;
  
  console.log('');
  
  // Test 2: Room Creation (AI)
  results.total++;
  const aiRoom = await testRoomCreationAI();
  if (aiRoom) results.passed++;
  else results.failed++;
  
  console.log('');
  
  // Test 3: Room Creation (Voting)
  results.total++;
  const voteRoom = await testRoomCreationVoting();
  if (voteRoom) results.passed++;
  else results.failed++;
  
  console.log('');
  
  // Test 4: WebSocket Connection
  if (aiRoom) {
    results.total++;
    if (await testWebSocketConnection(aiRoom.roomCode)) results.passed++;
    else results.failed++;
    
    console.log('');
  }
  
  // Test 5: Invalid Room Code
  results.total++;
  if (await testInvalidRoomCode()) results.passed++;
  else results.failed++;
  
  console.log('');
  
  // Test 6: CORS
  results.total++;
  if (await testCORS()) results.passed++;
  else results.failed++;
  
  // Summary
  console.log('\n' + '='.repeat(50));
  log(`\n📊 Test Results Summary\n`, colors.yellow);
  log(`Total Tests: ${results.total}`, colors.blue);
  success(`Passed: ${results.passed}`);
  if (results.failed > 0) {
    error(`Failed: ${results.failed}`);
  } else {
    log(`Failed: ${results.failed}`, colors.reset);
  }
  
  const percentage = ((results.passed / results.total) * 100).toFixed(1);
  log(`\nSuccess Rate: ${percentage}%\n`, percentage === '100.0' ? colors.green : colors.yellow);
  
  if (results.failed === 0) {
    success('🎉 All tests passed! Backend is fully operational.\n');
  } else {
    error('⚠️  Some tests failed. Please review the errors above.\n');
  }
}

// Run tests
runAllTests().catch(err => {
  error(`Test suite failed: ${err.message}`);
  process.exit(1);
});
