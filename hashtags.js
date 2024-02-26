import { Schema } from "mongoose";

export const HashTagSchema = new Schema({
  text: { type: String, unique: true },
  posts: [
    {
      ref: 'Posts',
      types: Schema.ObjectId,
    },
  ],
});
