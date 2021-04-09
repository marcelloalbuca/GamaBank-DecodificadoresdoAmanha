const Joi = require("joi");

// /debito/valor
// /credito/valor/parcela >= 1
// /saque/valor
// /depositar/valor
// /transferencia/numero_conta/cpf/valor
// /compras/valor/parcela >= 1/transacao
// /pagamentos/fatura/parcela/valor/transacao
const transferenciaSchema = Joi.object({
  conta: Joi.string().required(),
  cpf: Joi.string().min(11).max(11).required(),
  valor: Joi.number().min(1).required()
})

class Transferencia{
    constructor({conta, cpf, valor}){
        const result = transferenciaSchema.validate({conta, cpf, valor})
        if(result.error){
            throw new Error(result.error)
        }
    }
}

// const transferencia = new Transferencia({conta:'12121', cpf:'11111111111', valor:1})

// //testando instancia
// const pass = user instanceof  User
// console.log(pass)
// // // const senha = new Login({username: 'usuarioSenha'})



