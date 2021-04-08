const mysql = require('mysql')

const database = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345',
	database: 'gamabank'
})

database.connect()

database.end(err => {
	console.log(err)
})

module.exports = database