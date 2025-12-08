const express = require('express');
const { register, checkAuth } = require('../../controllers/authController');
const router = express.Router();

router.post('/sign-up', register);
router.get('/check-auth', checkAuth);

module.exports = router;