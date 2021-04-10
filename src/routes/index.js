const { status } = require('../api/controllers/app.controller')
//const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')
//const { LoginRequestDTO, LoginResponseDTO } = require('../api/models/dto/auth.dto')

const authController = require('../api/controllers/auth.controller')

const { StatusCodes, ReasonPhrases } = require("http-status-codes")

const verifyJWT = require('../helpers/verificaToken')

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
  handler: async () => {
    try {
      const response = await userController.buscarUsuarios()

      return response
    } catch (err) {
      console.log(err)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Listar todos os usuários',
    notes: 'Listar todos os usuários cadastrados na Gamabank'
  }
}

const listarUsuarioPorId = {
  method: 'GET',
  path: '/usuarios/{id}',
  handler: userController.buscarUsuarioPorId,
  options: {
    tags: ['api', 'usuarios'],
    description: 'Listar usuário por ID',
    notes: 'Listar usuário por ID cadastrado na Gamabank'
  }
}

const criarUsuario = {
  method: 'POST',
  path: '/cadastrar',
  handler: async (request, h) => {
    try {
      const dadosCriacao = request.payload
      const response = await userController.criarUsuario(dadosCriacao, h)

      return response
    } catch (error) {
      return h
        .response({ message: ReasonPhrases.BAD_REQUEST })
        .code(StatusCodes.BAD_REQUEST)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Cadastrar novos usuários',
    notes: 'Cadastrar novos usuários na Gamabank',
  }
}

const logarUsuario = {
  method: 'POST',
  path: '/login',
  handler: async (request, h) => {
    try {
      const dadosLogin = request.payload
      const response = await authController.login(dadosLogin, h)

      return response
    } catch (err) {
      return h
        .response({ message: err }, console.log(err))
        .code(StatusCodes.BAD_REQUEST)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Logar usuario',
    notes: 'logar usuário na Gamabank',
  }
}

const deletarUsuario = {
  method: 'DELETE',
  path: '/usuarios/{id}',
  handler: userController.deletarUsuarioPorId,
  options: {
    tags: ['api', 'usuarios'],
    description: 'Deletar usuário cadastrado na Gamabank',
    notes: 'Deletar usuário cadastrado na Gamabank por ID'
  }
}

const atualizarUsuario = {
  method: 'PUT',
  path: '/usuarios/{id}',
  handler: userController.alterarUsuarioPorId,
  options: {
    tags: ['api', 'usuarios'],
    description: 'Atualizar dados do usuário cadastrado na Gamabank',
    notes: 'Atualizar nome, e-mail e senha do usuário cadastrado na Gamabank por ID'
  }
}

//ROTAS DE SALDO

const { buscarSaldoPorId } = require('../api/controllers/saldo.controller')
const { TransactionResponseDTO } = require('../api/models/dto/trasactions.dto')

const listarSaldoPorId = ({
    method: 'GET',
    path: '/saldo/{id}',
    handler: buscarSaldoPorId,
    options:{
            tags: ['api', 'saldo'],
            description: 'Lista o saldo', 
            notes: 'Lista saldo atual do usuário',
            validate: {
                params: Joi.object({
                    id : Joi.number()
                            .required()
                            .description('id do usuário'),
                })
            }
    }
  })

module.exports = [
  listarUsuarioPorId, 
  listarUsuarios, 
  criarUsuario, 
  deletarUsuario, 
  atualizarUsuario, 
  root, 
  listarSaldoPorId, 
  logarUsuario

]
