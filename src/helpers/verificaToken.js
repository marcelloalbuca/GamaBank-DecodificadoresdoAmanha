const { verify } = require('jsonwebtoken')

const { secret } = require('../configs/secret.json')

const verifyJWT = async (token, request) => {
  verify(token, process.env.JWT_SECRET || secret, (err, decoded) => {
    const errorMessage = { message: 'token inválido' }

    JSON.stringify(errorMessage)

    if (err) return errorMessage

    request.userId = decoded.userId
  })
}

module.exports = { verifyJWT }