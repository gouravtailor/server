const mongoose = require('mongoose');

let candidateSchema = new mongoose.Schema({
    rolecode: Number,
    fname:
    String,
    lname: String,
    phone: Number,
    email: String,
    linkedin: String,
    resume: String,
    experience: Number,
    sourcecode: Number,
    sourchingcode: Number,
    vendorcode: Number,
    r12name: String,
    r12date: Date,
    candidatecode: Number
});

module.exports = mongoose.model('Candidates', candidateSchema);