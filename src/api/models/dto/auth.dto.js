const Joi = require('joi')

const LoginRequestDTO = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().required()
}).label('LoginRequestDTO')

const LoginResponseDTO = Joi.object({
    token: Joi.string().required(),
    auth: Joi.bool().required()
}).label('LoginResponseDTO')


module.exports = {
    LoginRequestDTO,
    LoginResponseDTO
}

