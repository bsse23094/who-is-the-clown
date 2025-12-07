// Cloudflare Worker entry point for serverless backend
import { GameRoom } from './durable-objects/GameRoom';

export { GameRoom };

export interface Env {
  GAME_ROOMS: DurableObjectNamespace;
  GEMINI_API_KEY: string;
  CLIENT_ORIGIN: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.CLIENT_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', serverless: true }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // WebSocket upgrade for game room connections
    if (url.pathname.startsWith('/game/')) {
      const roomCode = url.pathname.split('/').pop();
      
      if (!roomCode || roomCode.length !== 5) {
        return new Response('Invalid room code', { 
          status: 400,
          headers: corsHeaders 
        });
      }

      // Get or create Durable Object for this room
      const id = env.GAME_ROOMS.idFromName(roomCode);
      const roomStub = env.GAME_ROOMS.get(id);
      
      // Forward the request to the Durable Object
      return roomStub.fetch(request);
    }

    // API routes
    if (url.pathname.startsWith('/api/')) {
      return handleApiRequest(request, env, corsHeaders);
    }

    return new Response('Not Found', { 
      status: 404,
      headers: corsHeaders 
    });
  },
};

async function handleApiRequest(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');

  try {
    // Create room endpoint
    if (path === '/rooms/create' && request.method === 'POST') {
      const { username } = await request.json() as { username: string };
      
      if (!username?.trim()) {
        return new Response(JSON.stringify({ error: 'Username is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }

      // Generate unique room code
      const roomCode = generateRoomCode();
      const userId = generateId();

      // Get Durable Object for this room
      const id = env.GAME_ROOMS.idFromName(roomCode);
      const roomStub = env.GAME_ROOMS.get(id);

      // Initialize room with owner
      const initRequest = new Request(request.url, {
        method: 'POST',
        body: JSON.stringify({ 
          action: 'init',
          roomCode,
          username: username.trim(),
          userId 
        }),
      });

      await roomStub.fetch(initRequest);

      return new Response(JSON.stringify({ 
        roomCode, 
        userId,
        username: username.trim()
      }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

function generateRoomCode(): string {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
