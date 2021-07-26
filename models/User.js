//Require Mongoose
const mongoose = require('mongoose');
//Require Passport-Local-Mongoose to create the hash passwords
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    username: {
        type: String,
        unique: true
    }
});

//If using an email, you need to specify that its the username
userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });
module.exports = mongoose.model('User', userSchema);