const jwt = require('jsonwebtoken')

const repository = require('../repositories/user.repository')
const crypto = require('../../helpers/encryptPassword')

const { mensagensUsuario } = require('../../helpers/userConstants')
const { mensagensDeposito } = require('../../helpers/depositoConstants')

const validaSenha = require('../../helpers/validaSenha')
const validaCPF = require('../../helpers/validaCPF')

const buscarUsuarios = async () => {
    return await repository.buscarUsuarios()
}

const buscarUsuarioPorId = async (id) => {
    const result = await repository.buscarUsuarioPorId(id)
    return result
}

const buscarUsuarioPorEmail = async (email) => {
    return await repository.buscarUsuarioPorEmail(email)
}

const criarUsuario = async (dadosUsuario) => {
    try {
        const { nome, email, cpf, senha } = dadosUsuario

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
        const dadosUsuarios = await buscarUsuarios()

        // verificando se na base de dados possui o email cadastrado
        const buscaPorEmail = dadosUsuarios.find(({ email }) => email === dadosParaLogin.email)
        if (!buscaPorEmail) return { messageError: 'email não possui cadastro' }

        // tentando buscar a senha do email digitado
        let senhaEncriptada
        const buscarSenha = await buscarUsuarioPorEmail(dadosParaLogin.email)

        // armazenando senha em uma variavel
        for (const usuario of buscarSenha) {
            senhaEncriptada = usuario.senha
        }

        // comparar senhas, se retornar true gerar token para usuario conseguir usar outras rotas
        if (buscaPorEmail) {
            const compararSenha = await crypto.comparePassword(dadosParaLogin.senha, senhaEncriptada)
            if (compararSenha) {
                // GERAR E RETORNAR UM TOKEN PARA ACESSAR AS ROTAS
                return { messageSucess: 'logado' }
            } else {
                return { messageError: 'email ou senha errado' }
            }
        }

    } catch (error) {
        console.error(error)
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
        console.log( {message: mensagensDeposito.depositoError } )

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
    logarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId,
    depositoUsuario
}