import { Schema } from "mongoose";

export const ChatSchema = new Schema({
  group_image: String,
  group_name: String,
  created_by: { type: Schema.ObjectId, ref: "Users" },
  is_group_chat: {
    type: Boolean,
    default: false,
  },
  members: [
    {
      user: { type: Schema.ObjectId, ref: "Users" },
      member_type: {
        type: String,
        enum: ["Admin", "Member"],
      },
      joined_on: Date,
    },
  ],
  is_pinned: {
    type: Boolean,
    default: false,
  },
});
