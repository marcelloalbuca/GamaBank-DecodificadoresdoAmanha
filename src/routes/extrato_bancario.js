
const User = require('../api/models/user')
const { extratos } = require('../api/controllers/app.controller');
const { TransactionResponseDTO } = require('../api/models/dto/trasactions.dto')
const Joi = require('joi');
console.log(TransactionResponseDTO)


const listarExtratosPorId = ({
    method: 'GET',
    path: '/api/extratos/{id}',
    handler: extratos,
    options:{
            tags: ['api', 'extratos'],
            description: 'List extratos', 
            notes: 'Lista todas as transações realizadas pelo usuário ',
            validate: {
                params: Joi.object({
                    id : Joi.number()
                            .required()
                            .description('the id for the todo item'),
                })
            }
    }
  })

  const listarComprasPorId = ({
    method: 'GET',
    path: '/api/compras/{id}',
    handler: extratos,
    options:{
            tags: ['api', 'extratos'],
            description: 'List extratos', 
            notes: 'Lista todas as transações realizadas pelo usuário ',
            validate: {
                params: Joi.object({
                    id : Joi.number()
                            .required()
                            .description('the id for the todo item'),
                })
            }
    }
  })

module.exports = [listarExtratosPorId, listarComprasPorId]