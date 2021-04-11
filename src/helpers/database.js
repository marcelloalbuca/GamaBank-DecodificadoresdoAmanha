const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'freedb.tech',
    user: process.env.DB_USER || 'freedbtech_csantos',
    password: process.env.DB_PASSWORD || 'vegeta2020',
    database: process.env.DB_NAME || 'freedbtech_teste',
    port: 3306
})

const execute = (sqlStatement) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlStatement, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

module.exports = { execute }
