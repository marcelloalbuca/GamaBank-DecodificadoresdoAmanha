const mysql = require('mysql')
require('dotenv/config')

// process.env.DB_HOST
// process.env.DB_PORT
// process.env.DB_USER
// process.env.DB_PASSWORD
// process.env.DB_NAME


const database = mysql.createConnection({
<<<<<<< HEAD
	host: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_HOST : process.env.DB_HOST,
	user: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_USER : process.env.DB_USER,
	password: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_PASSWORD : process.env.DB_PASSWORD,
	database: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_NAME : process.env.DB_NAME,
=======
	host: 'localhost',
	user: 'root',
	password: '12345',
	database: 'gamabank'
>>>>>>> dde2e25d1b907e7705d2246d697eb45c340460b6
})

database.connect()

module.exports = database