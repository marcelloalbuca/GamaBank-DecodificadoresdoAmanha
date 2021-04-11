const authService = require('../services/auth.service')

exports.login = async (dadosLogin, h) => {
    try {
        return await authService.login(dadosLogin, h)
    } catch (err) {
        console.log(err)
    }
}