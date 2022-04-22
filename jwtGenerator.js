const jwt = require("jsonwebtoken");
require('dotenv').config();

function jwtGenerator(consumer_id) {
    const payload = {
        consumer: consumer_id
    };
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn:60*60*60*60});
}

module.exports = jwtGenerator;