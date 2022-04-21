const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//get a specific user


//get all of user's games

//add a game to store
app.post("/games", async(req,res) => {
    try {
        const { game_id, title, release_date, base_price, rating } = req.body;
        const newGame = await pool.query("INSERT INTO game (game_id, title, release_date, base_price, rating) VALUES($1, $2, $3, $4, $5) RETURNING *", 
        [game_id, title, release_date, base_price, rating]);

        res.json(newGame.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//get all games (opening the front page of store where all games are listed)
app.get("/games", async(req, res) => {
    try {
        const allGames = await pool.query("SELECT * FROM game")
        res.json(allGames.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//get a specific game (open to a specific game web page)
app.get("/games/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const game = await pool.query("SELECT * FROM game WHERE game_id = $1", [id])

        res.json(game.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})