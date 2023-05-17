const mongoose = require('mongoose');
const {Schema} = mongoose;

const submissionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    problem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: true
    },

    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required:true
    },
    submittedAt: {
        type: Date,
        default: Date.now()
    }
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;