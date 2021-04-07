const mysql = require('mysql')

const database = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345',
	database: 'gamabank'
})

database.connect()

module.exports = database