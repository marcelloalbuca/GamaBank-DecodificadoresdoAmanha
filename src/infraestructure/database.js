const mysql = require('mysql')

const dotenv = require('dotenv')

const env = require('../configs/env')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345'
})

const connectionStatus = () => {
	console.log('Database connected...')
}

connection.connect(connectionStatus())

connection.end()