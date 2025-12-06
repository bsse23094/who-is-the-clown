import { Schema, model, Document, Types } from "mongoose";

export interface IAnswer {
  user: Types.ObjectId;
  text: string;
}

export interface IVote {
  voter: Types.ObjectId;
  votedFor: Types.ObjectId;
}

export interface IRound extends Document {
  room: Types.ObjectId;
  prompt: string;
  answers: IAnswer[];
  votes: IVote[];
  clownUser?: Types.ObjectId;
  judgeMethod: "ai" | "vote" | "random" | "logic";
  createdAt: Date;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
  },
  { _id: false }
);

const VoteSchema = new Schema<IVote>(
  {
    voter: { type: Schema.Types.ObjectId, ref: "User", required: true },
    votedFor: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { _id: false }
);

const RoundSchema = new Schema<IRound>(
  {
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    prompt: { type: String, required: true },
    answers: [AnswerSchema],
    votes: [VoteSchema],
    clownUser: { type: Schema.Types.ObjectId, ref: "User" },
    judgeMethod: {
      type: String,
      enum: ["ai", "vote", "random", "logic"],
      default: "logic",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const RoundModel = model<IRound>("Round", RoundSchema);
