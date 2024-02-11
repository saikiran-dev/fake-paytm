const mongoose = require('mongoose');
const { number } = require('zod');
mongoose.connect();

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String
});

const accountSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  balance: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
  User,
  Account
};
