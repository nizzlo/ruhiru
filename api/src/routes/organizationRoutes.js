const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers');
const orgController = require('../controllers/organizationControllers');

router.post('/organization', userController.loginRequired , orgController.register);

module.exports = router;