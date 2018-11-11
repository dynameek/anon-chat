/*  */
const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    to: Object,
    from: Object
});

const Chat = module.exports = mongoose.model('Chat', ChatSchema);

module.exports.addChat = (chatDetails, callback) =>{
    chatDetails.save(callback);
};

module.exports.getInfo = (chatId, callback) => {
    Chat.findOne({_id: chatId}, callback);
}

module.exports.getUserChat = (userId, callback) => {
    Chat.findOne({to: userId, $or: { from: userId}, isActive: true}, '_id', callback);
}