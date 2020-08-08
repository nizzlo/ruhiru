const Event = require('../models/eventModel');

module.exports = {

    addEvent: function(req, res, next) {

        const newEvent = new Event(req.body);
        newEvent.save((err, event) => {
            if (err) next(err);
            return res.status(201).json(event);
        });
    },

    listEent: function(req, res, next) {

        Event.find((err, event) => {
            if (err) next(err);
            return res.json(event);
        })
    }
}