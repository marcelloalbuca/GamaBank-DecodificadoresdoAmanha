const Joi = require('joi')


const DepositoRequestDTO = Joi.object({
    valor: Joi.number().required().min(1),
}).label('DepositoRequestDTO')

const DepositoResponseDTO = Joi.object({
    message: Joi.string(),
}).label('DepositoResponseDTO')


module.exports = {
    DepositoRequestDTO,
    DepositoResponseDTO
}

