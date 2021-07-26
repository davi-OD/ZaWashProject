//Require Mongoose
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    number_plate: {
        type: String
    },
    car_Color: {
        type: String
    },
    time: {
        type: String
    },
    date: {
        type: String
    },
    make_Vehicle: {
        type: String
    },
    type_Vehicle: {
        type: String
    },
    package: {
        type: String
    },
    assign_To: {
        type: String
    }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);