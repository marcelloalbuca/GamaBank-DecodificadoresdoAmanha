const Joi = require('@hapi/joi')

module.exports = {
  nome: Joi.string().min(3).required().label('Digite seu nome!'),
  email: Joi.string().email().required(),
  cpf: Joi.string().min(11).max(11).required(),
  senha: Joi.string().min(6).required()
}