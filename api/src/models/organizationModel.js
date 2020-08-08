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
}, { timestamps: true });


module.exports = mongoose.model("Organization",OrgSchema);