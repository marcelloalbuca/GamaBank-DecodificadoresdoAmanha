const { verifyJWT } = require('../helpers/verificaToken')
const { status } = require('../api/controllers/app.controller')
const userController = require('../api/controllers/user.controller')
const { StatusCodes, ReasonPhrases } = require("http-status-codes")
const saldoController = require('../api/controllers/extrato.controller')
const Joi = require('joi')
const { LoginRequestDTO, LoginResponseDTO } = require('../api/models/dto/auth.dto')
const authController = require('../api/controllers/auth.controller')
const { CadastroRequestDTO, CadastroResponseDTO } = require('../api/models/dto/cadastro.dto')
const { DepositoRequestDTO, DepositoResponseDTO } = require('../api/models/dto/deposito.dto')
const { ExtratoRequestDTO, ExtratoResponseDTO } = require('../api/models/dto/cadastro.dto')
const { buscarSaldoPorId } = require('../api/controllers/extrato.controller')

const { DepositoExternoRequestDTO, DepositoExternoResponseDTO } = require('../api/models/dto/depositoExterno.dto')


const root = {
  method: "GET",
  path: "/",
  handler: status,
  options: {
    tags: ['api'],
    description: 'API Gamabank',
    notes: 'API desenvolvida pelo Grupo Desenvolvedores do Amanhã.'
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
    } catch (err) {
      console.log(err)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Cadastrar novos usuários.',
    notes: 'Cadastrar novos usuários na Gamabank.',
    validate: {
      payload: CadastroRequestDTO,
    },
    response: {
      status: {
        // 200: CadastroResponseDTO,
        400: Joi.any()
      }
    }
  }
}

const logarUsuario = {
  method: 'POST',
  path: '/login',
  handler: async (request, h) => {
    try {
      const dadosLogin = request.payload

      if (!dadosLogin) return h
        .response({ message: 'Preencha os campos!' }).code(StatusCodes.BAD_REQUEST)

      const response = await authController.login(dadosLogin, h)

      return h.response(response).code(200)
    } catch (err) {
      console.log(err)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Logar usuário na Gamabank.',
    notes: 'Logar usuário na Gamabank.',
    validate: {
      payload: LoginRequestDTO,
    },
    response: {
      status: {
        200: LoginResponseDTO,
        400: Joi.any()
      }
    }
  }
}

const listarExtrato = {
  method: 'GET',
  path: '/extrato',
  handler: async (request, h) => {
    const token = request.headers.authorization

    if (!token) return h
      .response({ message: 'Token não providenciado!' })
      .code(401)

    verifyJWT(token, request)

    const id = request.userId

    if (!id) h
      .response({ message: 'Digite um ID válido!' }).code(StatusCodes.BAD_REQUEST)

    const result = await saldoController.listarExtratoPorId(id, h)

    if (!result) return h
      .response(ReasonPhrases.BAD_REQUEST).code(StatusCodes.BAD_REQUEST)

    return h.response(result).code(200)
  },
  options: {
    tags: ['api', 'extrato'],
    description: 'Lista o extrato do usuário',
    notes: 'Lista o extrato completo do usuário.',
    validate: {
      headers: Joi.object({
        'authorization': Joi.string().required()
      }).unknown()
    }
  },
}

const depositoUsuario = {
  method: 'PUT',
  path: '/deposito',
  handler: async (request, h) => {
    try {
      const { valor } = request.payload

      const token = request.headers.authorization

      if (!token) return h
        .response({ message: 'Token não providenciado!' })
        .code(401)

      verifyJWT(token, request)

      const idUsuario = request.userId

      return await userController.depositoUsuario(idUsuario, valor)
    } catch (err) {
      console.log(err)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'O usuário poderá realizar deposito.',
    notes: 'O usuário poderá realizar deposito em sua conta cadastrada na Gamabank.',
    validate: {
      payload: DepositoRequestDTO,
      headers: Joi.object({
        'authorization': Joi.string().required()
      }).unknown()
    },
    response: {
      status: {
        // 200: DepositoResponseDTO,
        400: Joi.any()
      }
    }
  }
}

const depositoUsuarioExterno = {
  method: 'PUT',
  path: '/deposito/externo',
  handler: async (request, h) => {
    try {
      const { email, cpfdepositante, valor } = request.payload

      return await userController.depositoUsuarioExterno(email, cpfdepositante, valor, h)
    } catch (err) {
      console.log(err)
    }
  },
  options: {
    tags: ['api', 'deposito'],
    description: 'Deposito de usuários não cadastrados.',
    notes: 'O usuário poderá receber deposito em sua conta de terceiros.',
    validate: {
      payload: DepositoExternoRequestDTO,
    },
    response: {
      status: {
        200: DepositoResponseDTO,
        400: Joi.any()
      }
    }
  }
}

const transferenciaEntreContas = {
  method: 'PUT',
  path: '/transferencia',
  handler: async (request, h) => {
    try {
      const token = request.headers.authorization
      const { email, valor } = request.payload
      if (!token) return h
        .response({ message: 'Token não providenciado!' })
        .code(401)

      verifyJWT(token, request)

      const idUsuario = request.userId

      return await userController.transferenciaEntreContas(idUsuario, email, valor)
    } catch (err) {
      console.log(err)
    }
  }
}

/*
const testeAcessoToken = {
  method: 'GET',
  path: '/teste_token',
  handler: async (request, h) => {
    try {
      const token = request.headers.authorization

      if (!token) return h
        .response({ message: 'token não providenciado' })
        .code(401)

      verifyJWT(token, request)

      return { userId: request.userId }
    } catch (err) {
      return h
        .response({ message: ReasonPhrases.BAD_REQUEST, err: err })
        .code(StatusCodes.BAD_REQUEST)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Listar todos os usuários',
    notes: 'Listar todos os usuários cadastrados na Gamabank',
  }
}

const listarUsuarioPorId = {
  method: 'GET',
  path: '/usuarios',
  handler: async (request, h) => {
    try {
      const token = request.headers.authorization

      if (!token) return h
        .response({ message: 'token não providenciado' })
        .code(401)

      verifyJWT(token, request)

      const id = request.userId

      const data = await userController.buscarUsuarioPorId(id, h)

      return data
    } catch (err) {
      console.log(err)
    }
  },
  options: {
    tags: ['api', 'usuarios'],
    description: 'Listar usuário por ID',
    notes: 'Listar usuário por ID cadastrado na Gamabank'
  }
}
*/

/*
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
*/


module.exports = [
  root,
  criarUsuario,
  logarUsuario,
  listarExtrato,
  depositoUsuario,
  depositoUsuarioExterno,
  transferenciaEntreContas
  //  testeAcessoToken,
  //  listarUsuarioPorId,
  // deletarUsuario,
  //  atualizarUsuario,

]

