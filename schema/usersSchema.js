const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String
});

module.exports = mongoose.model('Users', userSchema);