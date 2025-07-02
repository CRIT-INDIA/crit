// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: { type: String, unique: true },
  mobile: { type: String, unique: true },
  address: String,
  message: String,
});

module.exports = mongoose.model('User', userSchema);
