const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homestaySchema = new Schema({
    feature_images: [
        {
            images: String,
            description: String
        }
    ],
    name: String,
    address: String,
    distance: String,
    nb_people: Number,
    np_days: Number,
    time_start: Number, // Activity
    time_end: Number,   // Activity
    rating: Number,
    overview:[String],
    owner:{
        image: String,
        name: String,
        dob: String,
        gender: Boolean,
        phone: String,
        career: String
    },
    tour:{
        images: [String],
        description: [String]
    },
    food:{
        images: [String],
        description: [String]
    },
    rule:{
        description: [String]
    },
    video: String,
    comment: [String],
    room_type: String,
    location_type: String,
    vacation_type: String,
    cuisine: String,
    lifestyle: String
});

const Homestay = mongoose.model('homestays', homestaySchema);
module.exports = Homestay;