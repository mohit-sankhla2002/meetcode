const {Schema} = require('mongoose');
const mongoose = require('mongoose');
const UserSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        min: 2,
        max: 100
    },
    lastName: {
        type: String,
        require: true,
        min: 2,
        max: 100
    },
    username: {
        type: String,
        require: true,
        min: 5,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    dateJoined: {
        type: Date,
        default: Date.now()
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
    Submissions: {
        type: [String],
        default: []
    },
    bio: {
        type: String,
    },
    skills: {
        type: [String],
        default: []
    },
    languagesUsed: {
        type: [String],
        default: []
    },
    socialMedia: {
        website: {
            type: String,
        },
        twitter: {
            type: String
        },
        github: {
            type: String
        }
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;