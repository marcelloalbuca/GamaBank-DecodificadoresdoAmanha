const Joi = require("joi");

// /debito/valor
// /credito/valor/parcela >= 1
// /saque/valor
// /depositar/valor
// /transferencia/numero_conta/cpf/valor
// /compras/valor/parcela >= 1/transacao
// /pagamentos/fatura/parcela/valor/transacao
const saqueSchema = Joi.object({
  valor: Joi.number().min(1).required(),
})

class Saque{
    constructor({valor}){
        const result = saqueSchema.validate({valor})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

//const saque = new Saque({valor:1})

// //testando instancia
// const pass = user instanceof  User
// console.log(pass)
// // // const senha = new Login({username: 'usuarioSenha'})



