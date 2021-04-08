const mysql = require('mysql')
require('dotenv/config')

// process.env.DB_HOST
// process.env.DB_PORT
// process.env.DB_USER
// process.env.DB_PASSWORD
// process.env.DB_NAME

const database = mysql.createConnection({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER ||  'root',
	password: process.env.DB_PASSWORD || 'senha',
	database: process.env.DB_NAME || "db-gamabank"
})

module.exports = database