const { status } = require('../api/controllers/app.controller')
//const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')
//const { LoginRequestDTO, LoginResponseDTO } = require('../api/models/dto/auth.dto')
const Joi = require('joi')

//const usuarioService = require('../api/services/usuarioService.js')
//const User = require('../api/models/user')

const root = {
  method: "GET",
  path: "/",
  handler: status,
  options: {
      tags: ['api'],
      description: 'API Gamabank',
      notes: 'API desenvolvida pelo Grupo Desenvolvedores do Amanhã'
  }
};


const listarUsuarios = {
  method: 'GET',
  path: '/usuarios',
  handler: userController.buscarUsuarios,
  options: {
    tags: ['api','usuarios'],
    description: 'Listar todos os usuários',
    notes: 'Listar todos os usuários cadastrados na Gamabank'
  }
}

const listarUsuarioPorId = {
  method: 'GET',
  path: '/usuarios/{id}',
  handler: userController.buscarUsuarioPorId,
  options: {
    tags: ['api','usuarios'],
    description: 'Listar usuário por ID',
    notes: 'Listar usuário por ID cadastrado na Gamabank'
  }
  
}

const criarUsuario = {
  method: 'POST',
  path: '/usuarios',
  handler: userController.criarUsuario,
  options: {
    tags: ['api','usuarios'],
    description: 'Cadastrar novos usuários',
    notes: 'Cadastrar novos usuários na Gamabank'

  }
}

const deletarUsuario = {
  method: 'DELETE',
  path: '/usuarios/{id}',
  handler: userController.deletarUsuarioPorId,
  options: {
    tags: ['api','usuarios'],
    description: 'Deletar usuário cadastrado na Gamabank',
    notes: 'Deletar usuário cadastrado na Gamabank por ID'
  }
}

const atualizarUsuario = {
  method: 'PUT',
  path: '/usuarios/{id}',
  handler: userController.alterarUsuarioPorId,
  options: {
    tags: ['api','usuarios'],
    description: 'Atualizar dados do usuário cadastrado na Gamabank',
    notes: 'Atualizar nome, e-mail e senha do usuário cadastrado na Gamabank por ID'
  }
}


//ROTAS DE SALDO
const { listarExtradoPorId } = require('../api/controllers/saldo.controller')
const { TransactionResponseDTO } = require('../api/models/dto/trasactions.dto')

const listarExtrado = ({
    method: 'GET',
    path: '/extratos',
    handler: listarExtradoPorId,
    options:{
            tags: ['api', 'saldo'],
            description: 'Lista o extrato', 
            notes: 'Lista saldo atual do usuário',
            validate: {
                payload: Joi.object({
                    id : Joi.number()
                            .required()
                            .description('id do usuário'),
                })
            }
    }
  })

module.exports = [listarExtrado, listarUsuarioPorId, listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario, root]
