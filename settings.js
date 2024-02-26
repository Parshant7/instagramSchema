import { Schema } from "mongoose";

export const SettingSchema = new Schema({
  user: { ref: "Users", type: Schema.ObjectId },
  notifications: {
    pause_all: {
      type: Boolean,
      default: false,
    },
  },
  privacy: {
    is_private: {
      type: Boolean,
      default: false,
    },
  },
  comments: {
    allow_comments_from: {
        type: String,
        enum: ["Everyone", "People You Follow", "Your Followers", "People You Follow And Your Followers"]
    },
    block_comments_from: [{type: Schema.ObjectId, ref: 'Users'}],
  },
  story: {
    hide_story_from: [{type: Schema.ObjectId, ref: 'Users'}],
    close_friends: [{type: Schema.ObjectId, ref: 'Users'}],
    replying: {
        message_replies: {
            type: String,
            enum: ["Everyone", "People you follow", "Off"]
        }
    }
  },
  security: {},
  payments: {},
});