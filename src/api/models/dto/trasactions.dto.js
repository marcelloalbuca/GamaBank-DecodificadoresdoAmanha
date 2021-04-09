const Joi = require("joi");

const TransactionResponseDTO = Joi.object({
    id: Joi.string().required(),
    user_name: Joi.string().required(),
    transaction_name: Joi.string().required(),
    valor: Joi.string().required(),
    data_criacao: Joi.string().required(),
}).label('TransactionResponseDTO')

module.exports = {TransactionResponseDTO}