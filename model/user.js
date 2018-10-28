/*  */
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : String,
    isTyping : Boolean
});

UserSchema.index({username: -1, isTyping: 1});

const User = module.exports = mongoose.model('user', UserSchema);