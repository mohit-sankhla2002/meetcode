const express = require('express');
const router = express.Router();
const [getAllProblems, getSpecificProblem, createAProblem] = require('../controllers/problem');

router.get('/', getAllProblems); // get all problems
router.get('/:id', getSpecificProblem); // get a specific problem
router.post('/', createAProblem); // create a problem

module.exports = router;