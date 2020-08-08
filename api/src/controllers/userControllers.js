const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = {

    register: function(req, res, next){
        const newUser = User(req.body);
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        newUser.save((err, user) => {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                user.password = undefined;
                return res.json(user);
            }
        })
    },

    login: function(req, res, next){
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) next(err);
            if (!user) {
                res.status(401).json({ message: 'Authorization failed. No user found'});
            } else if (user) {
                if (!user.comparePassword(req.body.password, user.password)) {
                    res.status(401).json({ message: 'Authorization failed. Wrong password'});
                } else {
                    user.password = undefined;
                    return res.json({
                        user,
                        accessToken: jwt.sign({
                            id:user._id,
                            email: user.email
                        }, process.env.JWT_SECRET)
                    });
                }
            }
        })
    },

    updateProfile: function(req, res, next){
        User.findOneAndUpdate({_id:req.params.id}, {$set:{profile:req.body}}, {new:true},  (err, user) => {
            if (err) next(err);
            user.password = undefined;
            res.send(user);
        })
    },

    loginRequired: function(req, res, next){
        if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
            jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
                if (err) return res.status(401).json({ message: 'Unauthorized user!'});
                req.user = user;
                next();
            })
        } else {
            return res.status(401).json({ message: 'Unauthorized user!'});
        }
    },
}