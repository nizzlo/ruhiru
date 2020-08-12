const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers');
const eventController = require('../controllers/eventControllers');
var fileUploadService  = require('../services/fileUploadService');
var uploader = fileUploadService.upload;

router.post('/event', userController.loginRequired, uploader.single('cover') , eventController.addEvent);
router.get('/event', eventController.listEvent);
router.get('/user/event', userController.loginRequired, eventController.filterEvent);
router.delete('/event', userController.loginRequired, eventController.deleteEvent);

module.exports = router;