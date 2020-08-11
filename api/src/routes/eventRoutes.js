const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers');
const eventController = require('../controllers/eventControllers');
var multer  = require('multer')();

router.post('/event', userController.loginRequired, multer.single('cover') , eventController.addEvent);
router.get('/event', eventController.listEvent);
router.get('/user/event', userController.loginRequired, eventController.filterEvent);
router.delete('/event', userController.loginRequired, eventController.deleteEvent);

module.exports = router;