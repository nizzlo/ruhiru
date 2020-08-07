const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.post('/user/profile/:id', userController.loginRequired ,userController.updateProfile);

module.exports = router;