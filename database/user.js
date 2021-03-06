/*  */
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : String,
    wantsToChat: Boolean,
    isEngaged : Boolean,
    isTyping: Boolean
});

UserSchema.index({username: -1, isTyping: 1});

const User = module.exports = mongoose.model('User', UserSchema);

/*  Model methods on Database   */

module.exports.getAllUsers = (callback) => {
    User.find(callback);
}
module.exports.getFreeUser = (callback) => {
    User.findOne({$and: [
        {isEngaged: false},
        {wantsToChat: true}
        ]}, '_id', callback);
};

module.exports.getUser = (id, callback) => {
    User.findOne({_id: id},'_id username', callback);
};

module.exports.addUser = (userDetails, callback) => {
    User.create(userDetails, callback);
};

module.exports.freeUser = (id, callback) => {
    User.updateOne({_id: id}, {wantsToChat: false, isEngaged: false}, callback);
}

module.exports.updateFreedom = (userDetails, callback) => {
    User.updateOne({_id: userDetails._id}, {wantsToChat: userDetails.wantsToChat}, callback);
};

module.exports.removeAll = (callback) => {
    User.remove({}, callback);
};

module.exports.removeUser = (id, callback) => {
    User.remove({_id: id}, callback);
};

module.exports.getEngagementValue = (userId, callback) => {
    User.findOne({_id: userId},'isEngaged', callback);
};

module.exports.updateEngagement = (values, callback) => {
    User.updateOne({_id: values._id}, {isEngaged: values.isEngaged}, callback);
};

module.exports.freeAll = (callback) => {
    User.updateMany({}, {isEngaged: false, wantsToChat: true}, callback);
};