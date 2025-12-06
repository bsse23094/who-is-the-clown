import { Server } from "socket.io";
import { Server as HTTPServer } from "http";
import { env } from "../config/env";
import { registerRoomHandlers } from "./roomSocketHandlers";

export function createSocketServer(httpServer: HTTPServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: env.CLIENT_ORIGIN,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  const gameNamespace = io.of("/game");

  gameNamespace.on("connection", (socket) => {
    registerRoomHandlers(gameNamespace, socket);
  });

  return io;
}
