const mongoose = require('mongoose');

let salesSchema = new mongoose.Schema({
    name: String,
    ctc: Number,
    fixed: Number,
    min: Number,
    max: Number,
    component: Number,
    raise: Number,
    due: Number,
    location: String,
    biling: Number,
    address: Number,
    gst: Number
});

module.exports = mongoose.model('Sales', salesSchema);