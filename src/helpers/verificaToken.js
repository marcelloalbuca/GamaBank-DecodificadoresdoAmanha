const { verify } = require('jsonwebtoken')

const { secret } = require('../configs/secret.json')

const verifyJWT = async (token, request) => {
  verify(token, process.env.JWT_SECRET || secret, (err, decoded) => {
    if (err) return console.log(err)

    request.userId = decoded.userId
  })
}

module.exports = { verifyJWT }