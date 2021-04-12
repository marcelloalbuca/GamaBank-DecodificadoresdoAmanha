const repository = require('../repositories/user.repository')
const crypto = require('../../helpers/encryptPassword')
const { mensagensUsuario } = require('../../helpers/userConstants')
const { mensagensDeposito } = require('../../helpers/depositoConstants')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const validaSenha = require('../../helpers/validaSenha')
const validaCPF = require('../../helpers/validaCPF')


const buscarUsuarios = async () => {
    return await repository.buscarUsuarios()
}

const buscarUsuarioPorId = async (id, h) => {
    try {
        const response = await repository.buscarUsuarioPorId(id, h)

        if (!response) return { message: ReasonPhrases.BAD_REQUEST }

        return response
    } catch (err) {
        console.log(err)
    }
}

const criarUsuario = async (dadosCriacao, h) => {
    try {
        const { nome, email, cpf, senha } = dadosCriacao

        // verificando se na base de dados possui o email cadastrado
        const cpfFormatado = validaCPF(cpf)
        const senhaValidada = validaSenha(senha)

        if (!cpfFormatado) {
            return { message: mensagensUsuario.cpfInvalido }
        }
        if (!senhaValidada) {
            return { message: mensagensUsuario.senhaInvalida }
        }

        let { encryptedPassword } = await crypto.encryptPassword(senhaValidada, null)

        const resultado = await repository.criarUsuario(nome, email, cpfFormatado, encryptedPassword)

        return resultado
    } catch (err) {
        console.log(err)
    }
}

const deletarUsuarioPorId = async (idUsuario) => {
    const { id } = idUsuario
    return await repository.deletarUsuarioPorId(id)
}

const alterarUsuarioPorId = async (id) => {
    const result = await repository.alterarUsuarioPorId()
    return result
}

const depositoUsuario = async (idUsuario, valor) => {
    try {
        if (valor < 1)
            return { messageError: mensagensDeposito.depositoValorNegativo }

        return await repository.depositoUsuario(idUsuario, valor)
    } catch (err) {
        console.error(err)
    }
}

const depositoUsuarioExterno = async (email, cpfdepositante, valor, h) => {
    try {
        if (valor <= 0) return h.response({ messageError: 'O valor não pode ser menor e/ou igual 0.' }).code(400)

        const cpfFormatado = validaCPF(cpfdepositante)

        if (!cpfFormatado) return h.response({ messageError: 'CPF precisa ser válido.' }).code(400)

        return await repository.depositoUsuarioExterno(email, cpfdepositante, valor, h)
    } catch (err) {
        console.log(err)
    }
}

const transferenciaEntreContas = async (email, cpfdepositante, valor) => {
    try {

        return await repository.transferenciaEntreContas(email, cpfdepositante, valor)
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