const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    homestay_id: String,
    image: {type: String, default: "https://iupac.org/cms/wp-content/uploads/2018/05/default-avatar.png"},
    name: String,
    content: String,
    time: {type: String, default: Date(Date.now()).toString()}
});

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;