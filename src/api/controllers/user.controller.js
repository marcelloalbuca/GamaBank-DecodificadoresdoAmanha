const service = require('../services/user.service')
//const User = require('../models/user')


const newAccount = async (request, h) =>{

    const user = new User(request.payload)
    const result = await service.createAccount(user)

    return result
}

const buscarUsuarios = async () => {

    return await service.buscarUsuarios()
  }

const buscarUsuarioPorId = async (id) => {
    
    const result = await service.buscarUsuarioPorId(id)
    return result
  }

const criarUsuario = async () => {
    const result = await service.buscarUsuarios()
    return result
}

const deletarUsuarioPorId = async () => {
    const result = await service.buscarUsuarios()
    return result
}

const alterarUsuarioPorId = async () => {
    const result = await service.buscarUsuarios()
    return result
}

module.exports = {
    newAccount,
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId
}