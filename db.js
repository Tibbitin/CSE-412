const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "cse412"
})

module.exports = pool;