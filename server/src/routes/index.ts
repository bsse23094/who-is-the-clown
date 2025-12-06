import { Router } from "express";
import { roomRouter } from "./roomRoutes";

export const router = Router();

router.use("/rooms", roomRouter);
