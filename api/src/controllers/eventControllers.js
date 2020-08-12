const Event = require('../models/eventModel');

module.exports = {

    addEvent: function(req, res, next) {

        req.body.createdBy = req.user.id; 
        const newEvent = new Event(req.body);
        if (req.file !== undefined) {
            newEvent.cover = req.file.filename;
        }
        newEvent.save((err, event) => {
            if (err) next(err);
            return res.status(201).json(event);
        });
    },

    listEvent: function(req, res, next) {

        Event.find((err, events) => {
            if (err) next(err);

            events.forEach( event => {
                event.cover = process.env.HOST_PATH+event.cover;
            })
            return res.json(events);
        });
    },

    filterEvent: function(req, res, next) {

        Event.find(
            {createdBy:req.user.userId}, 
                (err, event) => {
                    if (err) next(err);
                    return res.json(event);
            });
    },

    deleteEvent: function(req, res, next) {

        Event.findByIdAndDelete(req.query._id, (err, event) => {
            if (err) next(err);
            return res.sendStatus(200);
        });
    }
}