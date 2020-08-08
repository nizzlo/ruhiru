const express = require("express");
const router = express.Router();
const orgController = require('../controllers/organizationControllers');

router.post('/organization' , orgController.register);

module.exports = router;