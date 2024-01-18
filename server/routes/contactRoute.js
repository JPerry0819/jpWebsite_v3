const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.post('/contact', contactController.handleContact);

module.exports = router;