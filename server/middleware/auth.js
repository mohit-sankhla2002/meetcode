const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret_string = process.env.JWT_SECRET_STRING;

const auth = (req,res,next) => {
    const authHeader = req.headers["Authorization"];
    if (!authHeader) {
        return res.status(403).json({message: 'Missing Auth Header'});
    }
    const decoded = jwt.verify(authHeader, secret_string);
    if(decoded && decoded.id) {
        req.userId = decoded.id;
        next();
    } else {
        return res.status(403).json({message: `Incorrect Token`});
    }
}

module.exports = auth;