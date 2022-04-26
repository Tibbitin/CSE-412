const authorization = require("./authorization");
const pool = require("./db")
const router = require("express").Router();

module.exports = router;

router.post("/", authorization, async(req, res) => {
    try {
        const {game_id} = req.query;
        await pool.query("DELETE FROM owns WHERE game_id = $1 AND consumer_id = $2;", [game_id, req.user]); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json("There was an issue accessing the server");
    }
})