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

// const login  = ({
//     method: 'POST', 
//    path: "/", 
//    handler: authController.login,
//    options:{
//     tags: ['api', 'login'],
//     description: 'Rota para autenticação', 
//     notes: 'Anotações da rota...',
//     validate:{
//         payload: LoginRequestDTO
//     }, 
//     response:{
//         status:{
//             200:LoginResponseDTO,
//             400:Joi.any() //retorna qualquer coisa 
//         }
//     }  
//    }
// })
 
// module.exports = [ root, login ]
// =======
const usuarioService = require('../api/service/usuarioService.js')
const User = require('../api/models/user')

const root = {
  method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
}

const listarUsuarios = {
  method: 'GET',
  path: '/usuarios',
  handler: async () => {
    try {
      return await usuarioService.buscarUsuarios()
    } catch (error) {
      console.log(error)
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
      console.log(error)
      return { message: 'Erro ao procurar usuário!' }
    
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

      return { message: 'Usuário criado com sucesso!' }
    } catch (error) {
      return { message: 'Erro ao criar usuário!' }
      
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

<<<<<<< HEAD
module.exports = [root, listarUsuarioPorId, listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario]

// listarUsuarioPorId, listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario

=======
module.exports = [listarUsuarioPorId, listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario]
>>>>>>> 71767a13bc91aab127516f1b7bf1da124b02477c
