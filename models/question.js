const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String,
    answer: String
});

const Question = mongoose.model('questions', questionSchema);
module.exports = Question;