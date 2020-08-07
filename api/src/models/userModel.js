const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ProfileSchema = require('./profileModel').schema;

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String
    },
    profile: ProfileSchema
}, { timestamps: true });

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = mongoose.model("User",UserSchema);