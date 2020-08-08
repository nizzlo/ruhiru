const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers');
const eventController = require('../controllers/eventControllers');

router.post('/event', userController.loginRequired, eventController.addEvent);
router.get('/event', eventController.listEent);

module.exports = router;