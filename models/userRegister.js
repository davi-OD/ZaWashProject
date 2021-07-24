//Require Mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('userRegister', userSchema);