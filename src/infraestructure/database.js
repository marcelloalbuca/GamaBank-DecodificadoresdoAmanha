const mysql = require('mysql')

const database = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'db_gamabank'
})

database.connect()

module.exports = database