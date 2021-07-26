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
    work_Id: {
        type: String
    }
});

module.exports = mongoose.model('Washer', washerSchema);