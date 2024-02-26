import {Schema} from mongoose;

export const PlaceSchema = new Schema({
    name: {type: String, unique: true},
    location:{
        lat: String,
        long: String
    },
    posts: [{
        ref: 'Posts',
        types: Schema.ObjectId
    }]
})