import { Schema } from "mongoose";

export const ReelSchema = new Schema({
  posted_by: { ref: "Users", type: Schema.ObjectId },
  location: { ref: "Places", type: Schema.ObjectId },
  caption: String,
  liked_by: { ref: "Users", type: Schema.ObjectId },
  sound: { type: "Sounds", type: Schema.ObjectId },
  hash_tags: [{ ref: "HashTags", type: Schema.ObjectId }],
  mentions: [{ ref: "Users", type: Schema.ObjectId }],
  is_edited: {
    type: Boolean,
    default: false,
  },
  is_archived: {
    type: Boolean,
    default: false,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});
