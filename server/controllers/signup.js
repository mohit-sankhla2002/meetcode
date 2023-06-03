const bcrypt = require('bcrypt');
const User = require('../models/User')

module.exports = async (req,res) => {
    const {name, username, email, password} = req.body;
    try {
        const user = await User.findOne({username: username});
        if (user) {
            res.status(403).json({message: 'User already exists'})
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = User.create({
            username: username,
            name: name,
            email: email,
            password: hashedPassword
        });
        res.status(201).json({message: `user created!`});
    } catch(e) {
        console.log(e.message);
        res.json(501).json({message: e.message});
    }
}