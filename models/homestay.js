const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homestaySchema = new Schema({
    feature_images: [String],
    name: String,
    address: String,
    nb_people: String,
    np_days: Number,
    time_start: Number, // Activity
    time_end: Number,   // Activity
    rating: Number,
    overview:[String],
    owner:{
        image: String,
        name: String,
        dob: Date,
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
});

const Homestay = mongoose.model('Homestay', homestaySchema);
module.exports = Homestay;