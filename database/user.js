/*  */
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : String,
    isFree: Boolean,
    isTyping : Boolean
});

UserSchema.index({username: -1, isTyping: 1});

const User = module.exports = mongoose.model('User', UserSchema);

/*  Model methods on Database   */

module.exports.getFreeUser = (callback) => {
    User.find({isFree: true}, '_id username' ,callback);
};

module.exports.getUser = (id, callback) => {
    User.findById(id,'_id username', callback);
};

module.exports.addUser = (userDetails, callback) => {
    userDetails.save(callback);
};
module.exports.updateFreedom = (details, callback) => {
    User.findOneAndUpdate({_id: details.id}, {isFree: details.value}, callback);
};
module.exports.removeUser = (id, callback) => {
    User.remove({_id: id}, callback);
};
