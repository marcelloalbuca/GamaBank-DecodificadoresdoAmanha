const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'db_gamabank',
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
