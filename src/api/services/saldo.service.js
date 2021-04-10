const repository = require('../repositories/saldo.repository')
const {saldoNotFound} = require('../../helpers/saldoConstants')

const buscarSaldoPorId = async (id) => {
    const saldo = await repository.buscarSaldoPorId(id)
    if(saldo.length > 0) return saldo
    return saldoNotFound
}

module.exports = { 
    buscarSaldoPorId
}