const mysql = require('mysql2');

const pool = createPool({
    host: "localhost",
    user: "zero",
    password: "",
    database: "database",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
module.exports = pool;