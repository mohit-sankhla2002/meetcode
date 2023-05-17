const User = require('../models/User')
// TODO: The get user details should not return password
const getUserDetails = async (req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({message: `user not found`});
        } else {
            res.status(200).json({user});
        }
    } catch(e) {
        console.log(e.message);
        res.status(501).json({'message': `Some Error Occurred: ${e.message}`});
    }
}

module.exports = getUserDetails;