const services = require('../services/user.service')

const buscarUsuarios = async () => {
    try {
        return await services.buscarUsuarios()
    } catch (error) {
        console.error(error)
    }
}


const buscarUsuarioPorId = async (id) => {
    try {
        return await services.buscarUsuarioPorId(id)
    } catch (error) {
        console.error(error)
    }
}

const criarUsuario = async (request, h) => {
    try {
        return await services.criarUsuario(request.payload)
    } catch (error) {
        console.error(error)
    }
}

const logarUsuario = async (request, h) => {
    try {
        return await services.logarUsuario(request.payload)
    } catch (error) {
        console.error(error)
    }
}

const deletarUsuarioPorId = async (request, h) => {
    try {
        return await services.deletarUsuarioPorId(request.params)
    } catch (error) {
        console.error(error)
    }

}

const alterarUsuarioPorId = async (id) => {
    try {
        return await services.alterarUsuarioPorId(id)
    } catch (error) {
        console.error(error)
    }
}

const depositoUsuario = async (id, valor) => {
    try {
        return await services.depositoUsuario(id, valor)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    logarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId,
    depositoUsuario
}