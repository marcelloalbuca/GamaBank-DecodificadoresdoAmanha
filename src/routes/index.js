const usuarioService = require('../api/service/usuarioService.js')

const userSchema = require('../api/models/userSchema')

const listarUsuarios = {
  method: 'GET',
  path: '/usuarios',
  handler: async () => {
    try {
      return await usuarioService.buscarUsuarios()
    } catch (error) {
      return { message: 'Erro ao listar usuário!' }
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
      return { message: 'Erro ao procurar usuário!' }
    
    }
  }
}

const criarUsuario = {
  method: 'POST',
  path: '/usuarios',
  handler: async (request, h) => {
    try {
      const user = request.payload

      const userCreated = await usuarioService.criarUsuario(user)

<<<<<<< HEAD
      console.log(user)
      console.log(userCreated)

      h.response(userCreated).code(200)
    } catch (error) {
      console.log(error)
    }
  },
  options: {
    validate: {
      payload: userSchema
=======
      return { message: 'Usuário criado com sucesso!' }
    } catch (error) {
      return { message: 'Erro ao criar usuário!' }
      
>>>>>>> 5cf4c1a8103a9afb21adc416ac76e2a287c51191
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