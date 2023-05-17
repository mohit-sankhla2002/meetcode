const mongoose  = require('mongoose');


const ProblemSchema = new mongoose.Schema({
    title: {
        type: String, require: true
    },
    description: {
        type: String,
        require: true,
    },
    exampleTestCases: {
        type: [{
            input: String,
            output: String
        }],
        default: [{
            input: "",
            output: ""
        }]
    },
    testCases: {
        type: [{
            input: String,
            output: String
        }],
        default: [{
            input: "",
            output: ""
        }]
    },
    constraints: [{
        var: String,
        upperBound: Number,
        lowerBound: Number
    }],
    tags: {
        type: [String],
        default: []
    }
});

const Problem = mongoose.model("Problem", ProblemSchema);

module.exports = Problem;