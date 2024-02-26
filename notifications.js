import { Schema } from "mongoose";

export const NotificationSchema = new Schema({
  user_id: { type: Schema.ObjectId, ref: "Users" },
  notification_type: {
    type: String,
    enum: ["FollowRequest", "FollowAcceptRequest", "Comment", "Like", "StoryMentions"],
  },
  content: String,
  is_group_chat: {
    type: Boolean,
    default: false,
  },
  is_read: {
    type: Boolean,
    default: false,
  },
});
