/*  */
const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    body: String,
    by: Object,
    for: Object,
    isfetched: Boolean
});

const Message = module.exports = mongoose.model('Message', MessageSchema);