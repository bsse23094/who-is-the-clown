export function log(...args: unknown[]) {
  console.log("[SERVER]", ...args);
}

export function logError(...args: unknown[]) {
  console.error("[ERROR]", ...args);
}
