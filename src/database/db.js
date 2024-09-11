const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '170311',
    database: 'recipes'
});

module.exports = pool.promise();
