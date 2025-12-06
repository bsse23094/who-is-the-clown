import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  avatar?: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    avatar: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const UserModel = model<IUser>("User", UserSchema);
