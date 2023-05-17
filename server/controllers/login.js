const bcrypt = require('bcrypt');
const User = require('../models/User')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const login = async (req,res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username: username});
        if (!user) {
            res.status(404).json({message: 'User not Found'});
            return;
        }

        const verified = await bcrypt.compare(password, user.password);
        if (!verified) {
            res.status(401).json({'message': 'Enter correct Password'});
            return;
        }

        const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET_STRING, {expiresIn: '1d'});

        res.status(200).json({token});
    } catch (e) {
        console.log(e.message);
        res.status(500).json({'message': e.message});
    }
};

module.exports = login;