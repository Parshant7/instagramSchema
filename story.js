import { Schema } from "mongoose";

export const StorySchema = new Schema({
    posted_by: {ref: 'Posts', type: Schema.ObjectId},
    seenBy: [{ref: 'Users', type: Schema.ObjectId}],
    for_close_friends: Boolean,
    created_at: Date,
    mentions: [{ref: 'Users', type: Schema.ObjectId}],
    sound: {
        sound_id: {ref: 'Sounds', type: Schema.ObjectId},
        time_start: String,
        time_end: String,
        x_pos: String,
        y_pos: String,
        scale: String,
        rotation: String
    },
    stickers: {
        media_id: {ref: 'Stickers', type: Schema.ObjectId},
        x_pos: String,
        y_pos: String,
        scale: String,
        rotation: String
    },
    image: String,
    additional_links: [{
        addr: String,
        link_type: {
            type: String,
            enum: ["Post", "Story", "Reel", "User"]
        },
        x_pos: String,
        y_pos: String,
        scale: String,
        rotation: String
    }],
    is_archived: {
        type: Boolean,
        default: false,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
})