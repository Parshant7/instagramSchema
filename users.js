import { Schema } from 'mongoose';
export const UserSchema = new Schema({
    username: {type: String, unique:true},
    name: {
        first_name: String,
        last_name: String
    },
    dob: Date,
    gender: {type: String, enum: ["Male", "Female", "Other"]},
    bio: String,
    email: {
        temp_mail: {
            email: String,
            index: true, 
            sparse: true,
            isVerified: Boolean
        },
        auth_mail: {
            email: String,
            index: true,  
            sparse: true,
            isVerified: Boolean
        }
    },
    phone_number: {
        phone_number: {
            unique: true,
            sparse: true,
            number: String,
            countryCode: String,
        },
        isVerified: Boolean
    },
    passwordHistory: [{
        password: String,
        changedOn: Date
    }],
    password: String,
    profile_pic: String,
    followers: [{ref: 'Users', type: Schema.ObjectId}],
    followings: [{ref: 'Users', type: Schema.ObjectId}],
    restricted_users: [{ref: 'Users', type: Schema.ObjectId}],
    blocked_users: [{ref: 'Users', type: Schema.ObjectId}],
    saved_posts: [{ref: 'Posts', type: Schema.ObjectId}],
    archived_posts: [{ref: 'Posts', type: Schema.ObjectId}],
    highlights: [{ref: 'Highlights', type: Schema.ObjectId}],
    account_type: {
        type: String,
        enum: ["Private" | "Public"]
    },
    is_verified: { //blue tick
        type: Boolean,
        default: False
    },
    settings: {
        
    }
}).createIndex({"email.temp_mail": 1, "email.auth_mail": 1}, {unique: true})