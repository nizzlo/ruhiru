const mongoose = require('mongoose');

const OrgSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'org'
    }
}, { timestamps: true });


module.exports = mongoose.model("Organization",OrgSchema,'users');