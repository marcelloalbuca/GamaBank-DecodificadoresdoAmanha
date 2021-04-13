const userServices = require('../services/user.service')

const { ReasonPhrases, StatusCodes } = require('http-status-codes')

const buscarUsuarios = async (userId) => {
    try {
        return await userServices.buscarUsuarios(userId)
    } catch (error) {
        console.error(error)
    }
}

const buscarUsuarioPorId = async (id, h) => {
    try {
        if (!id) return h
            .response(ReasonPhrases.BAD_REQUEST).code(StatusCodes.BAD_REQUEST)

        return await userServices.buscarUsuarioPorId(id, h)
    } catch (err) {
        console.log(err)
    }
}

const criarUsuario = async (dadosCriacao, h) => {
    try {
        return await userServices.criarUsuario(dadosCriacao, h)
    } catch (err) {
        console.lor(err)
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

const depositoUsuario = async (idUsuario, valor) => {
    try {
        return await userServices.depositoUsuario(idUsuario, valor)
    } catch (err) {
        console.error(err)
    }
}

const depositoUsuarioExterno = async (email, cpfdepositante, valor, h) => {
    try {
        return await userServices.depositoUsuarioExterno(email, cpfdepositante, valor, h)
    } catch (err) {
        console.error(err)
    }
}

const transferenciaEntreContas = async (idUsuario, email, valor) => {
    try {
        return await userServices.transferenciaEntreContas(idUsuario, email, valor)
    } catch (err) {
        console.error(err)
    }
}




module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId,
    depositoUsuario,
    depositoUsuarioExterno,
    transferenciaEntreContas
}