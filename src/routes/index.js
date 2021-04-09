// <<<<<<< HEAD
// const Joi = require('joi')
// const {status} = require('../api/controllers/app.controller')
// const authController = require('../api/controllers/auth.controller')
// const {LoginRequestDTO,LoginResponseDTO} = require('../api/models/dto/auth.dto')

// const root = ({
//      method: 'GET', 
//     path: "/", 
//     handler: status,
//     options:{
//         tags: ['api'], //tenho que ter pelo menos essa tag
//         description: 'Verificação do status da aplicação', 
//         notes: 'Pode ser utilizado para ver o status da aplicação'
//     }
// })

const listarUsuarios = {
  method: 'GET',
  path: '/usuarios',
  handler: async (request, h) => {
    const rows = await usuarioService.buscarUsuarios()

    h.response(rows).code(200)
  }
}

const listarUsuarioPorId = {
  method: 'GET',
  path: '/usuarios/{id}',
  handler: async (request, h) => {
    try {
      const { id } = request.params
      return await usuarioService.buscarUsuarioPorId(id)
    } catch (error) {
      console.log(error)
      return { message: 'Erro ao procurar usuário!' }
    }
  }
}

const criarUsuario = {
  method: 'POST',
  path: '/usuarios',
  handler: async (request, h) => {
    const user = request.payload

    const userCreated = await usuarioService.criarUsuario(user)

    console.log(user)
    console.log(userCreated)

    return userCreated
  }
}

const deletarUsuario = {
  method: 'DELETE',
  path: '/usuarios/{id}',
  handler: async (request, h) => {
    try {
      const { id } = request.params
      await usuarioService.deletarUsuarioPorId(id)
      return { message: 'Usuário Deletado!' }
    } catch (error) {
      return { message: 'Erro ao deletar usuário!' }
    }
  }
}

const atualizarUsuario = {
  method: 'PUT',
  path: '/usuarios/{id}',
  handler: async (request, h) => {
    try {
      const { id } = request.params
      const { senha } = request.payload

      await usuarioService.alterarUsuarioPorId(id, senha)
      return { message: 'Usuário atualizado!' }
    } catch (error) {
      return { message: 'Erro ao atualizar usuário!' }
    }
  }
}

module.exports = [listarUsuarioPorId, listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario]
