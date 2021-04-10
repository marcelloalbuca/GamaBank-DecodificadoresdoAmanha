const authService = require('../services/auth.service')

const { StatusCodes, ReasonPhrases } = require("http-status-codes");

exports.login = async (dadosLogin, h) => {
    try {
        return await authService.login(dadosLogin, h)
    } catch (error) {
        h
            .response({ message: ReasonPhrases.BAD_REQUEST }, console.log(error))
            .code(StatusCodes.BAD_REQUEST)
    }
}