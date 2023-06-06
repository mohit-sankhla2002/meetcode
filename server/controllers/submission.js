const auth = require('../middleware/auth');
const Submission = require('../models/Submission');

const createASubmission = async (req,auth,res) => {
    const problemId = req.params.id;
    const {code, language} = req.body;
    try {
        const submission = new Submission({
            problem: problemId,
            user: req.userId,
            code: code,
            language: language,
        });

        const finalSubmission = await submission.save();
        res.status().json({id: finalSubmission._id});

    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: e.message});
    }
};

const getSubmissionsByUser = (req,auth,res) => {
    const id = req.userId;
    const limit = req.query.limit || 20;
    try {
        const submissions = Submission.find({user: id}).limit(limit);
        res.status(200).json({submissions});
    } catch(e) {
        console.log(e.message);
        res.json(500).json({message: e.message});
    };
}

module.exports = {createASubmission, getSubmissionsByUser};