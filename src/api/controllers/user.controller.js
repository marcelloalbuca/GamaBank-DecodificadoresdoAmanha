const userServices = require('../services/user.service')

const buscarUsuarios = async (userId) => {
    try {
        return await userServices.buscarUsuarios(userId)
    } catch (error) {
        console.error(error)
    }
}


const buscarUsuarioPorId = async (id) => {
    try {
        return await userServices.buscarUsuarioPorId(id)
    } catch (error) {
        console.error(error)
    }
}

const criarUsuario = async (dadosCriacao, h) => {
    try {
        return await userServices.criarUsuario(dadosCriacao, h)
    } catch (error) {
        console.lor(error)
    }
}

const deletarUsuarioPorId = async (request, h) => {
    try {
        return await userServices.deletarUsuarioPorId(request.params)
    } catch (error) {
        console.error(error)
    }

}

const alterarUsuarioPorId = async (id) => {
    try {
        return await userServices.alterarUsuarioPorId(id)
    } catch (error) {
        console.error(error)
    }
}

const depositoUsuario = async (id, valor) => {
    try {
        return await userServices.depositoUsuario(id, valor)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId,
    depositoUsuario
}