import { UserModel } from "../models/User";
import { AppError } from "../utils/errors";

export async function getUserById(userId: string) {
  const user = await UserModel.findById(userId);
  if (!user) throw new AppError("User not found", 404);
  return user;
}

export async function createUser(username: string) {
  if (!username || username.trim().length === 0) {
    throw new AppError("Username is required");
  }
  return await UserModel.create({ username: username.trim() });
}
