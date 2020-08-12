const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        required:true
    },
    cover: {
        type: String,
        default:'39690882-49cf-4119-8d35-36972daad5bb.jpg'
    }
}, { timestamps: true });


module.exports = mongoose.model("Event",EventSchema);