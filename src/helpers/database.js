const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST || '192.168.1.147',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'senha',
    database: process.env.DB_NAME || 'banco',
    port: 3306
})

const execute = (sqlStatement) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlStatement, (err, result) => {
            if(err) reject(err)
            else resolve(result)
            //connection.end()
        })
    })
}

module.exports = { execute }
