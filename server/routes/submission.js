const router = require('express').Router();

const {createASubmission, getSubmissionsByUser} = require('../controllers/submission')

router.post('/:id', createASubmission);
router.get('/', getSubmissionsByUser)

module.exports = router;