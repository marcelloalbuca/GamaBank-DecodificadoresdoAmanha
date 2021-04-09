const Joi = require("joi");

const LoginSchema = Joi.object({
    username: Joi.string().email(),
    password:  Joi.string().required().min(6).max(30).required(),
})

class Login{
    constructor({username, password}){
        const result = LoginSchema.validate({username, password})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

// const user = new Login({})
// // const senha = new Login({username: 'usuarioSenha'})


