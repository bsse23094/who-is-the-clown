import { Request, Response, NextFunction } from "express";
import * as roomService from "../services/roomService";

export async function createRoom(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username } = req.body;
    const result = await roomService.createRoomWithOwner(username);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

export async function getRoom(req: Request, res: Response, next: NextFunction) {
  try {
    const { code } = req.params;
    const room = await roomService.getRoomByCode(code);
    res.json(room);
  } catch (err) {
    next(err);
  }
}
