const Joi = require('joi')


const DepositoRequestDTO = Joi.object({
        token: Joi.string().required(),
        valor: Joi.number().required().min(1),
}).label('DepositoRequestDTO')

const DepositoResponseDTO = Joi.object({
    message: Joi.string(),
}).label('DepositoResponseDTO')


module.exports = {
    DepositoRequestDTO,
    DepositoResponseDTO
}

