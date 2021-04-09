const Joi = require("joi");

// /debito/valor
// /credito/valor/parcela >= 1
// /saque/valor
// /depositar/valor
// /transferencia/numero_conta/cpf/valor
// /compras/valor/parcela >= 1/transacao
// /pagamentos/fatura/parcela/valor/transacao

//se a palavra é credito ou débito 
const regex = /(?:debito|credito)$/

const comprasSchema = Joi.object({
  transacao: Joi.string().required().pattern(regex).message('Valores válidos: debito ou crédito'),
  parcela: Joi.number().min(1).required(),
  valor: Joi.number().min(1).required()
})

class Compras{
    constructor({transacao, parcela, valor}){
        const result = comprasSchema.validate({transacao, parcela, valor})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

// const compras = new Compras({transacao:'dfd', parcela:1, valor:1})

// //testando instancia
// const pass = user instanceof  User
// console.log(pass)
// // // const senha = new Login({username: 'usuarioSenha'})



