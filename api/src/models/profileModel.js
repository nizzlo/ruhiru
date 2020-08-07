const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    aboutme: {
        type: String,
    },
    birthdate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    points: {
        type: Number,
        default: 0
    },
    bloodgroup: {
        type: String,
        enum : ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+'],
        default: true
    } 
});


module.exports = mongoose.model("Profile", ProfileSchema);