const jwt = require("jsonwebtoken");
require('dotenv').config();

function jwtGenerator(user_id) {
    const payload = {
        user: user_id
    };
    jwt.sign(payload, process.env.jwtSecret, {expiresIn:60*60*60*60});
}

module.exports = jwtGenerator;