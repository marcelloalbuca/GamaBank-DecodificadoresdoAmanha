const repository = require('../repositories/saldo.repository')
const {saldoNotFound} = require('../../helpers/saldoConstants')

const listarExtratoPorId = async (id) => {
    const saldo = await repository.listarExtratoPorId(id)
    console.log(saldo)
    if(saldo.length > 0) return saldo
    return saldoNotFound
}

module.exports = { 
    listarExtratoPorId
}