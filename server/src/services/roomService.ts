import { RoomModel } from "../models/Room";
import { UserModel } from "../models/User";
import { AppError } from "../utils/errors";

function generateRoomCode(): string {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

export async function createRoomWithOwner(username: string) {
  if (!username || username.trim().length === 0) {
    throw new AppError("Username is required");
  }

  const user = await UserModel.create({ username: username.trim() });

  let code = generateRoomCode();
  let exists = await RoomModel.findOne({ code });
  while (exists) {
    code = generateRoomCode();
    exists = await RoomModel.findOne({ code });
  }

  const room = await RoomModel.create({
    code,
    players: [user._id],
    status: "waiting",
  });

  return { room, user };
}

export async function getRoomByCode(code: string) {
  const room = await RoomModel.findOne({ code }).populate("players");
  if (!room) throw new AppError("Room not found", 404);
  return room;
}

export async function getRoomById(roomId: string) {
  const room = await RoomModel.findById(roomId).populate("players");
  if (!room) throw new AppError("Room not found", 404);
  return room;
}

export async function joinRoom(code: string, username: string) {
  if (!username || username.trim().length === 0) {
    throw new AppError("Username is required");
  }

  const room = await RoomModel.findOne({ code }).populate("players");
  if (!room) throw new AppError("Room not found", 404);

  if (room.status !== "waiting") {
    throw new AppError("Room is not accepting new players");
  }

  const user = await UserModel.create({ username: username.trim() });
  room.players.push(user._id);
  await room.save();

  const updatedRoom = await RoomModel.findById(room._id).populate("players");

  return { room: updatedRoom, user, players: updatedRoom?.players || [] };
}

export async function updateRoomStatus(
  roomId: string,
  status: "waiting" | "in_progress" | "finished"
) {
  const room = await RoomModel.findByIdAndUpdate(
    roomId,
    { status },
    { new: true }
  ).populate("players");

  if (!room) throw new AppError("Room not found", 404);
  return room;
}
