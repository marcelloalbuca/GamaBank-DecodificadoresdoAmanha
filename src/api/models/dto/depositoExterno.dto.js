const Joi = require('joi')


const DepositoExternoRequestDTO = Joi.object({
    email: Joi.string().required(),
    cpfdepositante: Joi.string().required(),
    valor: Joi.number().required(),
}).label('DepositoExternoRequestDTO')



const DepositoExternoResponseDTO = Joi.object({
    message: Joi.string(),
}).label('DepositoExternoResponseDTO')


module.exports = {
    DepositoExternoRequestDTO,
    DepositoExternoResponseDTO
}


  
