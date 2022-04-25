const router = require("express").Router();
// const { user } = require("pg/lib/defaults");
const pool = require("./db")
const authorization = require("./authorization");

module.exports = router;

//router.post("/", authorization, async(req, res) => {
//    try {
//        const {user} = await pool.query("SELECT username FROM consumer WHERE consumer_id = $1", [req.user.id]);
//    } catch (error) {
//        console.error(error.message);
//    }
//})

router.get("/", authorization, async(req, res) => {
    try {
        //req.user has the payload
        //const consumer = await pool.query("SELECT username FROM consumer WHERE consumer_id = $1", [req.user]);
        const consumer = await pool.query("SELECT username, game.title FROM game, owns, consumer WHERE owns.game_id = game.game_id AND consumer.consumer_id = owns.consumer_id AND consumer.consumer_id = $1", [req.user]);

        res.json(consumer.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
})