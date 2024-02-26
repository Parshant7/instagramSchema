import { Schema } from "mongoose";

export const SoundSchema = new Schema({
  thumbnail_img: string,
  title: String,
  sound: String,
  most_played: [
    {
      startTime: String,
      endTime: String,
    },
  ],
});
