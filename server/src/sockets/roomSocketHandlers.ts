import { Namespace, Socket } from "socket.io";
import * as roomService from "../services/roomService";
import * as roundService from "../services/roundService";
import * as statsService from "../services/statsService";
import { log, logError } from "../config/logger";

export function registerRoomHandlers(io: Namespace, socket: Socket) {
  log(`Client connected: ${socket.id}`);

  // Create a new room
  socket.on("room:create", async ({ username }: any) => {
    try {
      log(`Creating room for user: ${username}`);
      const { room, user } = await roomService.createRoomWithOwner(username);
      socket.join(room.id);
      (socket as any).userData = { userId: user._id.toString(), roomId: room.id };
      socket.emit("room:created", { room, user });
      log(`Room created: ${room.code} by ${user.username}`);
    } catch (err: any) {
      logError("room:create error:", err);
      socket.emit("error", { message: err.message || "Failed to create room" });
    }
  });

  // Join an existing room
  socket.on("room:join", async ({ roomCode, username }: any) => {
    try {
      log(`User ${username} joining room: ${roomCode}`);
      const result = await roomService.joinRoom(roomCode, username);
      socket.join(result.room.id);
      (socket as any).userData = { userId: result.user._id.toString(), roomId: result.room.id };
      io.to(result.room.id).emit("room:joined", result);
      log(`User ${username} joined room: ${roomCode}`);
    } catch (err: any) {
      logError("room:join error:", err);
      socket.emit("error", { message: err.message || "Failed to join room" });
    }
  });

  // Start a new round
  socket.on("round:start", async ({ roomId, judgeMode }: any) => {
    try {
      log(`Starting round in room: ${roomId} with mode: ${judgeMode || "default"}`);
      const round = await roundService.startRound(roomId, judgeMode);
      io.to(roomId).emit("round:started", {
        roundId: (round as any).id,
        prompt: round.prompt,
        timer: 30,
        judgeMode: round.judgeMethod,
      });
      log(`Round started: ${(round as any).id} in room: ${roomId}`);
    } catch (err: any) {
      logError("round:start error:", err);
      socket.emit("error", { message: err.message || "Failed to start round" });
    }
  });

  // Submit an answer
  socket.on("round:submitAnswer", async ({ roomId, roundId, userId, text }: any) => {
    try {
      log(`User ${userId} submitting answer to round ${roundId}`);
      const { round, allAnswered } = await roundService.submitAnswer(
        roundId,
        userId,
        text
      );

      io.to(roomId).emit("round:answerUpdate", {
        roundId,
        answeredUserIds: round.answers.map((a: any) => a.user.toString()),
      });

      if (allAnswered) {
        log(`All answers received for round ${roundId}`);
        
        // If voting mode, start voting phase
        if (round.judgeMethod === "vote") {
          log(`Starting voting phase for round ${roundId}`);
          io.to(roomId).emit("round:votingStarted", {
            roundId,
            answers: round.answers.map((a: any) => ({
              userId: a.user.toString(),
              text: a.text,
            })),
          });
        } else {
          // Auto-judge with AI/logic/random
          log(`Auto-judging round ${roundId} with method: ${round.judgeMethod}`);
          const result = await roundService.judgeRound(round);
          io.to(roomId).emit("round:result", result);

          // Send updated scoreboard
          const stats = await statsService.getRoomStats(roomId);
          io.to(roomId).emit("room:scoreboard", { stats });
        }
      }
    } catch (err: any) {
      logError("round:submitAnswer error:", err);
      socket.emit("error", {
        message: err.message || "Failed to submit answer",
      });
    }
  });

  // Submit a vote
  socket.on("round:vote", async ({ roomId, roundId, voterId, votedForId }: any) => {
    try {
      log(`User ${voterId} voting for ${votedForId} in round ${roundId}`);
      const round = await roundService.submitVote(roundId, voterId, votedForId);

      io.to(roomId).emit("round:voteUpdate", {
        roundId,
        votedUserIds: round.votes.map((v: any) => v.voter.toString()),
      });

      // Get room to check player count
      const room = await roomService.getRoomById(roomId);
      const allVoted = round.votes.length >= room.players.length;

      if (allVoted) {
        log(`All votes received for round ${roundId}, tallying...`);
        const result = await roundService.tallyVotes(round);
        io.to(roomId).emit("round:result", result);

        // Send updated scoreboard
        const stats = await statsService.getRoomStats(roomId);
        io.to(roomId).emit("room:scoreboard", { stats });
      }
    } catch (err: any) {
      logError("round:vote error:", err);
      socket.emit("error", {
        message: err.message || "Failed to submit vote",
      });
    }
  });

  // Leave room
  socket.on("room:leave", async ({ roomId, userId }: any) => {
    try {
      await handlePlayerLeave(io, socket, roomId, userId);
    } catch (err: any) {
      logError("room:leave error:", err);
    }
  });

  // Disconnect
  socket.on("disconnect", async () => {
    log(`Client disconnected: ${socket.id}`);
    
    // Find all rooms this socket was in and handle cleanup
    const rooms = Array.from(socket.rooms).filter(r => r !== socket.id);
    for (const roomId of rooms) {
      try {
        const socketData = (socket as any).userData;
        if (socketData?.userId) {
          await handlePlayerLeave(io, socket, roomId, socketData.userId);
        }
      } catch (err: any) {
        logError("disconnect cleanup error:", err);
      }
    }
  });
}

async function handlePlayerLeave(io: Namespace, socket: Socket, roomId: string, userId: string) {
  try {
    log(`User ${userId} leaving room: ${roomId}`);
    
    const room = await roomService.getRoomById(roomId);
    if (!room) return;

    const wasHost = room.players[0]?.toString() === userId;
    
    // Remove player from room
    await roomService.removePlayerFromRoom(roomId, userId);
    
    socket.leave(roomId);
    
    // Get updated room
    const updatedRoom = await roomService.getRoomById(roomId);
    
    // If no players left, room will be cleaned up
    if (!updatedRoom || updatedRoom.players.length === 0) {
      log(`Room ${roomId} is now empty`);
      return;
    }
    
    // If the host left, notify everyone about the new host
    if (wasHost) {
      const newHost = updatedRoom.players[0];
      log(`New host assigned: ${newHost._id} in room: ${roomId}`);
      io.to(roomId).emit("room:hostChanged", {
        newHostId: newHost._id.toString(),
        newHostName: newHost.username,
      });
    }
    
    // Notify remaining players
    io.to(roomId).emit("room:playerLeft", {
      userId,
      players: updatedRoom.players,
      roomId,
    });
    
    log(`User ${userId} successfully removed from room ${roomId}`);
  } catch (err: any) {
    logError("handlePlayerLeave error:", err);
  }
}
