//Require Mongoose
const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema({
    washer_name: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    nin: {
        type: String
    },
    residence: {
        type: String
    },
    washer_name: {
        type: String
    },
    ID: {
        type: String
    }
});

module.exports = mongoose.model('washerRegister', washerSchema);