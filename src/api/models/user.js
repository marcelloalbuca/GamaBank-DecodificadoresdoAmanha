const Joi = require("joi");

const userSchema = Joi.object({
  nome: Joi.string().alphanum().min(3).max(30).required(),
  email:Joi.string().email(),
  cpf: Joi.string().min(11).max(11) ,
  senha: Joi.string().regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/)
})

// ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.

class User{
    constructor({nome, email, cpf,senha }){
        const result = userSchema.validate({nome, email, cpf,senha})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

const user = new User({nome:'rafael', email: 'email@rafael.com', cpf:'12345678111', senha:'senhadsss'})

// //testando instancia
// const pass = user instanceof  User
// console.log(pass)
// // // const senha = new Login({username: 'usuarioSenha'})




module.exports = User