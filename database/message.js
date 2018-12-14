/*  */
const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    body: String,
    by: Object,
    for: Object,
    isFetched: Boolean
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getAllMessages = (id, callback) => {
    Message.find({for: id}, '_id body by for isFetched',callback);
};

module.exports.getUnreadMessages = (values, callback) => {
    Message.find({for: values.chat, isFetched: false, by: {$ne: values.user}},
        '_id body by', callback);
};

module.exports.updateFetchStatus = (id, callback) => {
    Message.updateOne({_id: id}, {isFetched: true}, callback);
};

module.exports.addMessage = (messageDetails, callback) => {
    messageDetails.save(callback);
}
module.exports.deleteAll = (callback) => {
    Message.remove(callback);
}