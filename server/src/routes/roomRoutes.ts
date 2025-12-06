import { Router } from "express";
import { createRoom, getRoom } from "../controllers/roomController";

export const roomRouter = Router();

roomRouter.post("/", createRoom);
roomRouter.get("/:code", getRoom);
