import { Schema } from "mongoose";

export const HightlightSchema = new Schema({
  stories: [{ type: Schema.ObjectId, ref: "Story" }],
  highlight_name: String,
  owner: { type: Schema.ObjectId, ref: "User" },
  highlight_pic: String,
  is_deleted: { type: Boolean, default: false },
});
