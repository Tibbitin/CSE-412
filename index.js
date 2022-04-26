const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const authorization = require("./authorization");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//
//register and login routes
app.use("/auth", require("./jwtAuth"));

//get a specific consumer
app.get("/consumer/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const consumer = await pool.query("SELECT * FROM consumer WHERE consumer_id = $1", [id])
        res.json(consumer.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//get all of consumer's games
app.get("/consumer/:id/library", async(req, res) => {
    try {
        const { id } = req.params;
        const consumer = await pool.query("SELECT game_id FROM owns WHERE consumer_id = $1", [id])
        res.json(consumer.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//add a game to store
// app.post("/home", async(req,res) => {
//     try {
//         const { game_id, title, release_date, base_price, rating } = req.body;
//         const newGame = await pool.query("INSERT INTO game (game_id, title, release_date, base_price, rating) VALUES($1, $2, $3, $4, $5) RETURNING *", 
//         [game_id, title, release_date, base_price, rating]);

//         res.json(newGame.rows)
//     } catch (error) {
//         console.error(error.message)
//     }
// })


//get all games (opening the front page of store where all games are listed)
app.get("/home", async(req, res) => {
    try {
        const allGames = await pool.query("SELECT * FROM game");
        res.json(allGames.rows);
    } catch (error) {
        console.error(error.message)
    }
})


// add a game to a user's library
// app.post("/auth/home/:game_id",  require("./jwtAuth"), async(req,res) => {
//     try {
//         //req.user has the payload
//         const {game_id} = req.params;
//         console.log(req.params);
//         const game = await pool.query("INSERT INTO owns(consumer_id, game_id) VALUES($1, $2);", [req.user, game_id]);
//         res.json(game.rows);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json("There was an issue accessing the server");
//     }
// })

//Searching route
app.get("/search", async (req, res) => {
    try {
        const { title, rating, genre, price} = req.query;
        console.log(rating);
        var game_title;
        if(genre == "All") {
            game_title = await pool.query("SELECT * FROM game WHERE title || ' ' ILIKE $1 AND rating >= " + rating + "AND base_price >= " + price, ['%' + title + '%']);
        }
        else {
            console.log(genre);
            game_title = await pool.query("SELECT * FROM game, genre, type_of WHERE title || ' ' ILIKE $1 AND rating >= " + rating + "AND base_price >= " + price + "AND genre.genre_id = type_of.genre_id AND game.game_id = type_of.game_id AND genre_name = '" + genre + "'", ['%' + title + '%']);
        }

        // const { title, rating, price } = req.query;
        // console.log(price);
        // const game_title = await pool.query("SELECT * FROM game WHERE title || ' ' ILIKE $1 AND rating >= " + rating + "AND base_price >= " + price, ['%' + title + '%']);
        res.json(game_title.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//get a specific game (open to a specific game web page)
app.get("/auth/games/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const game = await pool.query("SELECT * FROM game WHERE game_id = $1", [id]);
        res.json(game.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})

//get all games that are on sale based on a specific percent off
app.get("/games/sales/:sale_id", async (req, res) => {
    try {
        const { sale_id } = req.params;
        const games_on_sale = await pool.query("SELECT game_id, percent_off FROM participates_in, sale WHERE participates_in.sale_id = sale.sale_id AND participates_in.sale_id = $1", [sale_id]);
        res.json(games_on_sale.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//send the list of genre names
app.get("/genres", async (req, res) => {
    try {
        const genre = await pool.query("SELECT genre_name FROM genre");
        res.json(genre.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get a genre based on a genre id
app.get("/genre/:genre_id", async (req, res) => {
    try {
        const { genre_id } = req.params;
        const genre = await pool.query("SELECT genre_name FROM genre WHERE genre_id = $1", [genre_id]);
        res.json(genre.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get all games based on a genre
app.get("/games/genre/:genre_id", async (req, res) => {
    try {
        const { genre_id } = req.params;
        const genre = await pool.query("SELECT game_id FROM type_of WHERE genre_id = $1", [genre_id]);
        res.json(genre.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get a dev studio based on a dev studio id
app.get("/studio/:studio_id", async (req, res) => {
    try {
        const { studio_id } = req.params;
        const studio = await pool.query("SELECT studio_name FROM development_studio WHERE studio_id = $1", [studio_id]);
        res.json(studio.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get all games based on a dev studio
app.get("/games/studio/:studio_id", async (req, res) => {
    try {
        const { studio_id } = req.params;
        const studio = await pool.query("SELECT game_id FROM created WHERE studio_id = $1", [studio_id]);
        res.json(studio.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get games based on a certain rating or higher
app.get("/games/rating/:rating", async (req, res) => {
    try {
        const { rating } = req.params;
        const game = await pool.query("SELECT title FROM game WHERE rating >= $1", [rating]);
        res.json(game.rows);
        
    } catch (error) {
        console.error(error.message)
    }
})

//deleting a game from a consumer's library
// app.delete("/consumer/:consumer_id/library/:game_id", async(req,res) => {
//     try {
//         const { consumer_id } = req.params;
//         const { game_id } = req.params;
//         const deletedGame = await pool.query("DELETE FROM owns WHERE consumer_id = $1 AND game_id = $2", [consumer_id, game_id])
//         res.json(deletedGame.rows)
//     } catch (error) {
//         console.error(error.message)
//     }
// })

// //adding a game to a consumer's library
// app.post("/games", async(req, res) => {
//     try {
//         const { title } = req.params;
//         const deletedGame = await pool.query("DELETE FROM game WHERE title = $1", [title])
//         res.json(deletedGame.rows)
//     } catch (error) {
//         console.error(error.message)
//     }
// })


//dashboard route
app.use("/games", require("./userDashboard"));

app.use("/add", require("./addGame"));
app.use("/delete", require("./deleteGame"));


app.listen(5000, () => {
    console.log("server has started on port 5000")
})