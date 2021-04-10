const jwt = require('jsonwebtoken')

const { secret } = require('../../configs/secret.json')

const repository = require('../repositories/user.repository')
const crypto = require('../../helpers/encryptPassword')

const { StatusCodes } = require('http-status-codes')

const buscarUsuarioPorEmail = async (email) => {
    return await repository.buscarUsuarioPorEmail(email)
}

exports.login = async (dadosLogin, h) => {
    try {
        const dadosUsuarios = await repository.buscarUsuarios()

        // verificando se na base de dados possui o email cadastrado
        const buscaPorEmail = dadosUsuarios.find(({ email }) => email === dadosLogin.email)
        if (!buscaPorEmail) return h
            .response({ messageError: 'email ou senha errado' })
            .code(StatusCodes.BAD_REQUEST)

        // tentando buscar a senha do email digitado
        let senhaEncriptada
        const buscarSenha = await buscarUsuarioPorEmail(dadosLogin.email)

        // armazenando senha em uma variavel
        for (const usuario of buscarSenha) {
            senhaEncriptada = usuario.senha
        }

        // comparar senhas, se retornar true gerar token para usuario conseguir usar outras rotas
        if (buscaPorEmail) {
            const compararSenha = await crypto.comparePassword(dadosLogin.senha, senhaEncriptada)
            if (compararSenha) {
                const userId = buscaPorEmail.id

                // GERAR E RETORNAR UM TOKEN PARA ACESSAR AS ROTAS
                const token = jwt.sign(
                    { userId },
                    process.env.JWT_SECRET || secret,
                    { expiresIn: 86000, algorithm: 'HS256' }
                )

                return { auth: true, token }
            } else {
                return h
                    .response({ messageError: 'email ou senha errado' })
                    .code(StatusCodes.BAD_REQUEST)
            }
        }
    } catch (error) {
        console.error(error)
    }
}