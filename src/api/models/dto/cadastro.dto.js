const Joi = require('joi')

const CadastroRequestDTO = Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().required(),
        cpf: Joi.string().required(),
        senha: Joi.string().required()
}).label('CadastroRequestDTO')

const CadastroResponseDTO = Joi.object({
    message: Joi.string().required(),
}).label('CadastroResponseDTO')


module.exports = {
    CadastroRequestDTO,
    CadastroResponseDTO
}

