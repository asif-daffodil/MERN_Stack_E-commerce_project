const express = require('express');
const getCompanyDetails = require('../../controllers/comController');
const router = express.Router();

router.get('/company-details', getCompanyDetails);

module.exports = router;