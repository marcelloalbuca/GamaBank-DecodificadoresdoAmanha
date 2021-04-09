const Joi = require("joi");

// /debito/valor
// /credito/valor/parcela >= 1
// /saque/valor
// /depositar/valor
// /transferencia/numero_conta/cpf/valor
// /compras/valor/parcela >= 1/transacao
// /pagamentos/fatura/parcela/valor/transacao
const creditoSchema = Joi.object({
  valor: Joi.number().min(1).required(),
  parcela: Joi.number().min(1).required()
})

class Credito{
    constructor({valor, parcela}){
        const result = creditoSchema.validate({valor, parcela})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

// const credito = new Credito({valor:1, parcela: 1})

// //testando instancia
// const pass = user instanceof  User
// console.log(pass)
// // // const senha = new Login({username: 'usuarioSenha'})



