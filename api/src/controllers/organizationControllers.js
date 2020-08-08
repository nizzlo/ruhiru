const Organization = require('../models/organizationModel');

module.exports = {
    register: function(req, res, next) {
        const newOrganization = Organization(req.body);
        newOrganization.save((err, org) => {
            if (err) next(err);
            return res.json(org);
        })
    }
}