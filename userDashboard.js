const authorization = require("./authorization");
const pool = require("./db")
const router = require("express").Router();

module.exports = router;

router.get("/", authorization, async(req, res) => {
    try {
        //req.user has the payload
        const consumer = await pool.query("SELECT * FROM game, owns, consumer WHERE owns.game_id = game.game_id AND consumer.consumer_id = owns.consumer_id AND consumer.consumer_id = $1", [req.user]);
        res.json(consumer.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("There was an issue accessing the server");
    }
})

