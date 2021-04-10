const repository = require('../repositories/user.repository')
const crypto = require('../../helpers/encryptPassword')

const { mensagensUsuario } = require('../../helpers/userConstants')
const { mensagensDeposito } = require('../../helpers/depositoConstants')
const { StatusCodes } = require('http-status-codes')
const validaSenha = require('../../helpers/validaSenha')
const validaCPF = require('../../helpers/validaCPF')


const buscarUsuarios = async () => {
    return await repository.buscarUsuarios()
}

const buscarUsuarioPorId = async (id) => {
    return await repository.buscarUsuarioPorId(id)
}

const criarUsuario = async (dadosCriacao, h) => {
    try {
        const { nome, email, cpf, senha } = dadosCriacao

        // verificando se na base de dados possui o email cadastrado
        const cpfFormatado = validaCPF(cpf)
        const senhaValidada = validaSenha(senha)

        if (!cpfFormatado) {
            return h.response({ message: mensagensUsuario.cpfInvalido }).code(StatusCodes.BAD_REQUEST)
        }
        if (!senhaValidada) {
            return h.response({ message: mensagensUsuario.senhaInvalida }).code(StatusCodes.BAD_REQUEST)
        }

        let { encryptedPassword } = await crypto.encryptPassword(senhaValidada, null)

        return await repository.criarUsuario(nome, email, cpfFormatado, encryptedPassword, h)
    } catch (err) {
        return h
            .response({ message: ReasonPhrases.BAD_REQUEST, err: err })
            .code(StatusCodes.BAD_REQUEST)
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

const depositoUsuario = async (id, valor) => {
    
    try{

        //id = 5
        valor = 1
        if (valor <= 0)
        return { message: mensagensDeposito.depositoValorNegativo }
        else
        console.log( {message: mensagensDeposito.depositoSuccess } )

        const result = await repository.depositoUsuario(id, valor)
        return result

        }catch{
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