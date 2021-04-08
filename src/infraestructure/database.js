const mysql = require('mysql')
require('dotenv/config')

// process.env.DB_HOST
// process.env.DB_PORT
// process.env.DB_USER
// process.env.DB_PASSWORD
// process.env.DB_NAME

const database = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345',
	database: 'gamabank'
})

database.connect()

module.exports = database