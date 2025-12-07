const express = require('express');
const { register } = require('../../controllers/authController');
const router = express.Router();

router.post('/sign-up', register);

module.exports = router;