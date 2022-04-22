const router = require("express").Router();
const { user } = require("pg/lib/defaults");
const pool = require("./db")
const authorization = require("./authorization");
const { Router } = require("react-router-dom");

router.post("/", authorization, async(req, res) => {
    try {
        const {user} = await pool.query("SELECT username FROM consumer WHERE consumer_id = $1", [req.user.id]);
    } catch (error) {
        console.error(error.message);
    }
})