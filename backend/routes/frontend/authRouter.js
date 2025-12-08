const express = require('express');
const { register, checkAuth, signIn } = require('../../controllers/authController');
const router = express.Router();

router.post('/sign-up', register);
router.get('/check-auth', checkAuth);
router.post('/sign-in', signIn)

module.exports = router;