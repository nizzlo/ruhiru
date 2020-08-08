const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers');
const eventController = require('../controllers/eventControllers');

router.post('/event', userController.loginRequired, eventController.addEvent);
router.get('/event', eventController.listEvent);
router.get('/user/event', userController.loginRequired, eventController.filterEvent);
router.delete('/event/:id', userController.loginRequired, eventController.deleteEvent);

module.exports = router;