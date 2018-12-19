//Unused model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    name: String,
    address: String,
    description: String,
    nb_people: String,
    rating: Number,

});

const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;