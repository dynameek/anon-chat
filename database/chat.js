/*  */
const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    to: Object,
    from: Object
});

const Chat = module.exports = mongoose.model('Chat', ChatSchema);
