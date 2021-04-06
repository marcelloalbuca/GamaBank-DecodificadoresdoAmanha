const usuarioService = require('../api/service/usuarioService.js')

const User = require('../api/models/user')

const listarUsuarios = {
  method: 'GET',
  path: '/usuarios',
  handler: async () => {
    try {
      return await usuarioService.buscarUsuarios()
    } catch (error) {
      console.log(error)
    }
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
    }
  }
}

const criarUsuario = {
  method: 'POST',
  path: '/usuarios',
  handler: async (request, h) => {
    try {
      const user = new User(request.payload)

      await usuarioService.criarUsuario(user)

      return { message: 'usuario criado com sucesso!' }
    } catch (error) {
      if (error) throw new Error(error)
    }
  }
}

const deletarUsuario = {
  method: 'DELETE',
  path: '/usuarios/{id}',
  handler: async (request, h) => {
    try {
      const { id } = request.params
      await usuarioService.deletarUsuarioPorId(id)
      return { message: 'Usuario Deletado!' }
    } catch (error) {
      console.log(error)
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
      return { message: 'Usuario alterado!' }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = [listarUsuarioPorId, listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario]