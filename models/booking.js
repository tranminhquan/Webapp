const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    homestay_id: String,
    name: String,
    phone: String,
    id_card: String,
    nb_people: Number,
    date: String
});

const Booking = mongoose.model('booking', bookingSchema);
module.exports = Booking;