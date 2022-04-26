const authorization = require("./authorization");
const pool = require("./db")
const router = require("express").Router();

module.exports = router;

router.post("/", authorization, async(req, res) => {
    try {
        //req.user has the payload
        const {game_id} = req.query;
        await pool.query("INSERT INTO owns(consumer_id, game_id) VALUES($1, $2);", [req.user, game_id]); 
        const show_game = await pool.query("SELECT consumer_id, game_id FROM owns WHERE consumer_id=$1 AND game_id = $2", [req.user, game_id]);
        res.json(show_game.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("There was an issue accessing the server");
    }
})