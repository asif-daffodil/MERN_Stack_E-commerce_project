const express = require('express');
const { updateProfile } = require('../../controllers/userController');
const isAuthenticated = require('../../middkeware/checkAuth');
const router = express.Router();

router.post('/update-profile', isAuthenticated, updateProfile);

module.exports = router;