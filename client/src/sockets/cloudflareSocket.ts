// WebSocket client adapter for Cloudflare Workers backend
// This replaces Socket.IO with native WebSocket

type MessageHandler = (data: any) => void;

class CloudflareSocketClient {
  private ws: WebSocket | null = null;
  private url: string;
  private roomCode: string = '';
  private handlers: Map<string, MessageHandler[]> = new Map();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private messageQueue: Array<{ type: string; data: any }> = [];

  constructor(url: string) {
    this.url = url;
  }

  connect(roomCode: string): void {
    // Prevent multiple connections to the same room
    if (this.ws && this.roomCode === roomCode) {
      console.log('⚠️ Already connected to this room');
      return;
    }

    // Close existing connection if connecting to different room
    if (this.ws) {
      this.ws.close();
    }

    this.roomCode = roomCode;
    const wsUrl = this.url.replace('http', 'ws').replace('https', 'wss') + `/game/${roomCode}`;
    
    console.log('🔌 Connecting to:', wsUrl);
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      console.log('✅ Connected to game server');
      this.reconnectAttempts = 0;
      
      // Send any queued messages after a small delay to ensure connection is fully ready
      setTimeout(() => {
        while (this.messageQueue.length > 0) {
          const msg = this.messageQueue.shift();
          if (msg && this.ws && this.ws.readyState === WebSocket.OPEN) {
            console.log('📤 Sending queued message:', msg.type);
            this.ws.send(JSON.stringify({ type: msg.type, ...msg.data }));
          }
        }
      }, 50);
    };

    this.ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log('📨 Received:', message.type, message);
        this.handleMessage(message);
      } catch (error) {
        console.error('❌ Failed to parse message:', error);
      }
    };

    this.ws.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };

    this.ws.onclose = () => {
      console.log('🔌 Disconnected from game server');
      this.attemptReconnect();
    };
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts - 1), 10000); // Exponential backoff, max 10s
      console.log(`Reconnecting... (${this.reconnectAttempts}/${this.maxReconnectAttempts}) in ${delay}ms`);
      setTimeout(() => {
        if (this.roomCode) {
          this.connect(this.roomCode);
        }
      }, delay);
    } else {
      console.error('❌ Max reconnection attempts reached');
    }
  }

  private handleMessage(message: any): void {
    const { type, ...data } = message;
    const handlers = this.handlers.get(type);
    
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }

  on(event: string, handler: MessageHandler): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event)!.push(handler);
  }

  once(event: string, handler: MessageHandler): void {
    const wrappedHandler = (data: any) => {
      handler(data);
      this.off(event, wrappedHandler);
    };
    this.on(event, wrappedHandler);
  }

  off(event: string, handler?: MessageHandler): void {
    if (!handler) {
      this.handlers.delete(event);
      return;
    }

    const handlers = this.handlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  emit(event: string, data?: any): void {
    const payload = { type: event, ...data };
    
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.log('📤 Sending:', event, payload);
      this.ws.send(JSON.stringify(payload));
    } else if (this.ws && this.ws.readyState === WebSocket.CONNECTING) {
      // Queue message if still connecting
      console.log('⏳ Queueing message (connecting):', event);
      this.messageQueue.push({ type: event, data });
    } else {
      console.error('❌ WebSocket is not connected, readyState:', this.ws?.readyState);
    }
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.handlers.clear();
    this.messageQueue = []; // Clear queued messages on disconnect
  }

  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }
}

// Export singleton instance
const SOCKET_URL = import.meta.env.VITE_SERVER_URL || 'https://who-is-the-clown.bsse23094.workers.dev';
let socketInstance: CloudflareSocketClient | null = null;

export function getSocket(): CloudflareSocketClient {
  if (!socketInstance) {
    socketInstance = new CloudflareSocketClient(SOCKET_URL);
  }
  return socketInstance;
}

export function disconnectSocket(): void {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
}
