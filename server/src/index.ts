import http from "http";
import { createApp } from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";
import { createSocketServer } from "./sockets";

async function start() {
  await connectDB();

  const app = createApp();
  const server = http.createServer(app);
  createSocketServer(server);

  server.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
    console.log(`🎮 Socket.IO namespace: /game`);
    console.log(`🌍 Client origin: ${env.CLIENT_ORIGIN}`);
  });
}

start();
