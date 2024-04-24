const mongoose = require('mongoose');

let roleSchema = new mongoose.Schema({
    company: String,
    role: String,
    date: Date,
    location: String,
    technology: String,
    skills: Array[String]
});

module.exports = mongoose.model('Roles', roleSchema);