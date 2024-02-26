import { Schema } from "mongoose";

export const StickersSchema = new Schema({
  image: String,
  name: String,
});
