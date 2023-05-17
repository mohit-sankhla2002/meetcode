const Problem = require('../models/Problem');

const getAllProblems = async (req,res) => {
    try {
        const limit = req.query.limit || 20;
        const {tags} = req.query;

        for (let i in tags) {
            i = i.toLowerCase();
        }
        let problems;
        if (!tags) {
            problems = await Problem.find({}).limit(limit);
        }
        else problems = await Problem.find({tags: {$in: tags}}).limit(limit);
        res.status(200).json(problems);

    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: e.message});
    }
}

const getSpecificProblem = async (req,res) => {
    const {id} = req.params
    try {
        const problem = await Problem.findById(id);
        res.status(200).json({problem})
    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: e.message});
    }
};

const createAProblem = async (req,res) => {
    const {title, description, exampleTestCases, testCases, constraints, tags} = req.body;
    try{
        const newProblem = new Problem({
            title: title,
            description: description,
            exampleTestCases: exampleTestCases,
            testCases: testCases,
            constraints: constraints,
            tags: tags
        });

        for (let i in tags) {
            i = i.toLowerCase();
        }

        const problem = await newProblem.save();
        res.status(201).json({message: 'Created! OK'});
    } catch(e) {
        console.log(e.message);
        res.json(500).json({message: e.message});
    }
}

module.exports = [getAllProblems, getSpecificProblem, createAProblem];