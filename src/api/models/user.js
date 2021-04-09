const Joi = require("joi");

const userSchema = Joi.object({
  nome: Joi.string().alphanum().min(3).max(30).required(),
  email:Joi.string().email(),
  cpf: Joi.string().min(11).max(11) ,
  senha: Joi.string().required().min(6).max(30).required(),
})

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