const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controller/accountController');

// Make sure you are importing protect correctly from authMiddleware
const { protect } = require('../middleware/authMiddleware');

router.post('/createAccount', registerUser);
router.post('/login', loginUser);

// Add the protect middleware to the route that requires authentication
router.get('/me', protect, getMe);

module.exports = router;