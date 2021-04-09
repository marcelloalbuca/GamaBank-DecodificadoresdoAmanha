const Joi = require("joi");

// /debito/valor
// /credito/valor/parcela >= 1
// /saque/valor
// /depositar/valor
// /transferencia/numero_conta/cpf/valor
// /compras/valor/parcela >= 1/transacao
// /pagamentos/fatura/parcela/valor/transacao

const greaterThan = (val) => val > 0? true:false

console.log(greaterThan(0))

const depositoSchema = Joi.object({
  valor: Joi.number().min(1).required()
})

class Deposito{
    constructor({valor}){
        const result = depositoSchema.validate({valor})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

const deposito = new Deposito({valor:1})

// //testando instancia
// const pass = user instanceof  User
// console.log(pass)
// // // const senha = new Login({username: 'usuarioSenha'})



