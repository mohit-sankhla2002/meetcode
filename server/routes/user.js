const express = require('express');
const getUserDetails = require('../controllers/getUserDetails');
const updateUserDetails = require('../controllers/updateUserDetails');
const router = express.Router();

router.get('/:id', getUserDetails)

router.patch('/:id', updateUserDetails);

module.exports = router;