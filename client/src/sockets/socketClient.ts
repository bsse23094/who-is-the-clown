// This file is deprecated - use cloudflareSocket.ts instead
// Kept for backward compatibility

export function getSocket(): any {
  throw new Error('socketClient.ts is deprecated. Use cloudflareSocket.ts instead');
}

export function disconnectSocket() {
  throw new Error('socketClient.ts is deprecated. Use cloudflareSocket.ts instead');
}
