const bcrypt = require('bcrypt');
const Organization = require('../models/organizationModel');

module.exports = {
    register: function(req, res, next) {
        const newOrganization = Organization(req.body);
        newOrganization.password = bcrypt.hashSync(req.body.password, 10);
        newOrganization.save((err, org) => {
            if (err) next(err);
            org.password = undefined;
            return res.json(org);
        })
    }
}