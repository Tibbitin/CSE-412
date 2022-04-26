const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async(req, res, next) => {
    try {
        const jwtToken = req.header("token");
        const verifiedInfo = jwt.verify(jwtToken, process.env.jwtKey);
        req.user = verifiedInfo.consumer;
        next();
    } catch (error) {
        console.error(error.message);
        return res.status(403).json("User does not have the Authorization to access this page");
    }
}