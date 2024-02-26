import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  post_id: { ref: 'Users', type: Schema.ObjectId },
  commented_by: { ref: 'Users', type: Schema.ObjectId },
  likes: [{ ref: 'Users', type: Schema.ObjectId }],
  reply_to: { ref: 'Comments', type: Schema.ObjectId }, //or numm
  replies: [{ ref: 'Comments', type: Schema.ObjectId }],
  image: String,
  is_edited: {
    type: Boolean,
    default: false,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});
