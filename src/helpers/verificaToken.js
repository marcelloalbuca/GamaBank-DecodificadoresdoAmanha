const { verify } = require('jsonwebtoken')
const { secret } = require('../configs/secret.json')

exports.verifyJWT = async (request, h, next) => {
  const token = request.headers['x-access-token']

  verify(token, process.env.JWT_SECRET || secret, (err, decoded) => {
    if (err) h.response({ errorMessage: 'Token Inválido' }).code(401)

    request.userId = decoded.userId
    next()
  })
}