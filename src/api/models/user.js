const Joi = require("joi");

const userSchema = Joi.object({
    nome: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().min(11).max(11).required(),
    senha: Joi.string().min(8).required()
})

// ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.

class User {
    constructor({ nome, email, cpf, senha }) {
        const result = userSchema.validate({ nome, email, cpf, senha })

        if (!result) {
            throw new Error('erro aqui')
        }
    }
}

exports.User = User

module.exports = { userSchema }