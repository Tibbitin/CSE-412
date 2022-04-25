require('dotenv').config();
const jwt = require("jsonwebtoken");

function jwtSignature(consumer_id) {
    const generationInfo = { consumer: consumer_id };
    return jwt.sign(generationInfo, process.env.jwtKey, {expiresIn:60*60*60*60});
}

module.exports = jwtSignature;