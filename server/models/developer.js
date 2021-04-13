const mongoose = require('mongoose');

var Developer = mongoose.model('Developer', {
    name: { type: String },
    email: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Developer };
