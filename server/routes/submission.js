const router = require('express').Router();
const {createASubmission} = require('../controllers/submission')
router.get('/:id', createASubmission);