import { Schema } from "mongoose";

export const ReactionSchema = new Schema({
  image_link: String,
  name: String,
});
