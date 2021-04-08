const Joi = require('@hapi/joi')

module.exports = {
  nome: Joi.string().
    min(3).message('digite seu nome completo').
    required().message('nome é requirido'),

  email: Joi.string().
    email().message('digite um e-mail válido').
    required().message('email é requirido'),

  cpf: Joi.string().
    min(11).message('cpf precisa ter 11 numeros').
    max(11).message('cpf precisa ter 11 numeros').
    required().message('cpf é requirido'),

  senha: Joi.string().
    min(6).message('digite uma senha maior, minimo de caractere = 6').
    required().message('senha é requirido')

}