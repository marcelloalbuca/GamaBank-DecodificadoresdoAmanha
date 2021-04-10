const repository = require('../repositories/user.repository')
const crypto = require('../../helpers/encryptPassword')

const { mensagensUsuario } = require('../../helpers/userConstants')

const validaSenha = require('../../helpers/validaSenha')
const validaCPF = require('../../helpers/validaCPF')

const buscarUsuarios = async () => {
    return await repository.buscarUsuarios()
}

const buscarUsuarioPorId = async (id) => {
    const result = await repository.buscarUsuarioPorId(id)
    return result
}

const criarUsuario = async (dadosUsuario) => {
    try {
        const { nome, email, cpf, senha } = dadosUsuario

        const buscarDados = await buscarUsuarios()

        for (const item of buscarDados) {
            if (item.cpf == cpf) return { messageError: errorsRepositories.cpfRepetido }
            if (item.email == email) return { messageError: errorsRepositories.emailRepetido }
        }

        const cpfFormatado = validaCPF(cpf)
        const senhaValidada = validaSenha(senha)

        if (!cpfFormatado)
            return { message: mensagensUsuario.cpfInvalido }
        if (!senhaValidada)
            return { message: mensagensUsuario.senhaInvalida }

        let { encryptedPassword } = await crypto.encryptPassword(senhaValidada, null)

        return await repository.criarUsuario(nome, email, cpfFormatado, encryptedPassword)
    } catch (error) {
        console.error(error)
    }
}

const logarUsuario = async (dadosParaLogin) => {
    try {
        const { email, senha } = dadosParaLogin
    } catch (error) {
        console.error(error)
    }
}

const deletarUsuarioPorId = async (id) => {
    return await repository.deletarUsuarioPorId(id)
}

const alterarUsuarioPorId = async (id) => {
    const result = await repository.alterarUsuarioPorId()
    return result
}

module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    logarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId
}