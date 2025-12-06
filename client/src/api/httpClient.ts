const API_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:4000";

export async function createRoom(username: string) {
  const response = await fetch(`${API_URL}/api/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create room");
  }

  return response.json();
}

export async function getRoom(code: string) {
  const response = await fetch(`${API_URL}/api/rooms/${code}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to get room");
  }

  return response.json();
}
