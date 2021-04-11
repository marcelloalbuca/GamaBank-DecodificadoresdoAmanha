const Joi = require('joi')
Joi.authHeader = require('joi-authorization-header')(Joi);

const ExtratoRequestDTO = Joi.object({
        nome: Joi.string().required(),
}).label('ExtratoRequestDTO')

const ExtratoResponseDTO = Joi.object({
    message: Joi.string().required(),
}).label('ExtratoResponseDTO')


module.exports = {
    ExtratoRequestDTO,
    ExtratoResponseDTO
}

