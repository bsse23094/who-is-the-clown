import { Schema, model, Document, Types } from "mongoose";

export interface IRoom extends Document {
  code: string;
  status: "waiting" | "in_progress" | "finished";
  players: Types.ObjectId[];
  currentRound?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const RoomSchema = new Schema<IRoom>(
  {
    code: { type: String, unique: true, index: true, required: true },
    status: {
      type: String,
      enum: ["waiting", "in_progress", "finished"],
      default: "waiting",
    },
    players: [{ type: Schema.Types.ObjectId, ref: "User" }],
    currentRound: { type: Schema.Types.ObjectId, ref: "Round" },
  },
  { timestamps: true }
);

export const RoomModel = model<IRoom>("Room", RoomSchema);
