/*  */
const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    to: Object,
    from: Object,
    isActive: Boolean
});

const Chat = module.exports = mongoose.model('Chat', ChatSchema);

module.exports.addChat = (chatDetails, callback) =>{
    chatDetails.save(callback);
};

module.exports.getInfo = (chatId, callback) => {
    Chat.findOne({_id: chatId}, callback);
}

module.exports.getUserChat = (userId, callback) => {
    Chat.findOne(
        { $or: [{ $and: [ {from: userId}, {isActive: true} ]},
                { $and: [ {to: userId}, {isActive: true} ]}
               ]},
        '_id',
        callback
    );
}

module.exports.getAllChats = (callback) => {
    Chat.find({}, callback);
}

module.exports.getChatStatus = (id, callback) => {
    Chat.findOne({_id: id}, 'isActive', callback);
}
module.exports.updateAll = (callback) => {
    Chat.updateMany({},{isActive: false}, callback);
}

module.exports.leaveChat = (id, callback) => {
    Chat.updateOne({_id: id}, {isActive: false}, callback);
}