import { Schema } from "mongoose";

export const MessageSchema = new Schema({
  chat_id: { type: Schema.ObjectId, ref: "Chats" },
  message_by: { type: Schema.ObjectId, ref: "Users" },
  content: String,
  reply_to: { type: Schema.ObjectId, ref: "Messages" },
  mentions: [{ type: Schema.ObjectId, ref: "Users" }],
  read_by: [{ user: { type: Schema.ObjectId, ref: "Users" }, read_at: Date }],
  media_attached: {
    media_link: String,
    media_type: {
      type: String,
      enum: ["Audio", "File", "Video", "Post"],
    },
  },
  reactions: [
    {
      reactedBy: { type: Schema.ObjectId, ref: "Users" },
      reaction: { type: Schema.ObjectId, ref: "Reactions" },
    },
  ],
  is_edited: {
    type: Boolean,
    default: false,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});
