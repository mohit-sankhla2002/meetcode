const User = require('../models/User.js');

const updateUserDetails = async (req,res) => {
    const id = req.params.id;
    const updates = req.body;
    console.log(updates);
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updates, {new: true});
        res.status(200).json({updatedUser});
    } catch(e) {
        res.status(500).json({message: `Something Went wrong: ${e.message}`});
    }


}

module.exports = updateUserDetails;