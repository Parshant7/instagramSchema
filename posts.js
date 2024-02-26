import {Schema} from mongoose;

export const PostSchema = new Schema({
    posted_by: {ref: 'Users', type: Schema.ObjectId},
    location: {ref: 'Places', type: Schema.ObjectId},
    caption: String,
    sound: {
        sound_id: {ref: 'Sounds', type: Schema.ObjectId},
        time_start: String,
        time_end: String,
    },
    medias: [{
        link:String, 
        media_type: {
            type: String,
            enum: ["Video", "Image"]
        }
    }],
    hash_tags: [{
        ref: 'HashTags', type: Schema.ObjectId
    }],
    mentions: [{
        userId: {ref: 'Users', type: Schema.ObjectId}, 
        x_pos: String, 
        Y_pos: String
    }],
    liked_by: [{ref: 'Users', type: Schema.ObjectId}],
    comments: [{ref: 'Comments', type: Schema.ObjectId}],
    is_Pinned: {
        type: Boolean,
        default: false
    },
    is_edited: {
        type: Boolean,
        default: false
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