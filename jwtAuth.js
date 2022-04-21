const router = require("express").Router();
const { user } = require("pg/lib/defaults");
const pool = require("./db")
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const validInfo = require("./validInfo");

//registering
router.post("/register", validInfo, async(req, res) => {
    try {
        
        //1. destructure the req.body (name, email, password)
        const { username, consumer_password } = req.body;

        //2. check if consumer exists (if user exists throw error)
        const consumer = await pool.query("SELECT * FROM consumer WHERE username = $1", [username]);
        
        if(consumer.rows.length !== 0) {
            return res.status(403).send("User already exists")
        }

        //3. Bcrypt the consumer password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(consumer_password, salt);

        //4. enter the new user inside our database
        const newConsumer = await pool.query("INSERT INTO consumer (username, consumer_password, wallet) VALUES ($1, $2, $3) RETURNING *", [username, bcryptPassword, 0.0]);

        //5. generating our jwt token
        const token = jwtGenerator(newConsumer.rows[0].consumer_id);
        res.json({ token });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

//login
router.post("/login", validInfo, async(req, res) => {
    try {
        //1. destructure the req.body
        const{ username, consumer_password } = req.body;

        //2. check if user doesn't exist (if not then we throw error)
        const consumer = await pool.query("SELECT * FROM consumer WHERE username = $1", [username]);
        if(consumer.rows.length === 0) {
            return res.status(401).json("Username or Password is incorrect");
        }
        
        //3. check if incoming password is the same as the database password
        const validPassword = await bcrypt.compare(consumer_password, consumer.rows[0].consumer_password);
        if(!validPassword) {
            return res.status(401).json("Username or Password is incorrect");
        }

        //4. give them the jwt token
        const token = jwtGenerator(consumer.rows[0].consumer_id);
        res.json({ token });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
