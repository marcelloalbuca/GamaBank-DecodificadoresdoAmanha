const repository = require('../repositories/saldo.repository')
const {saldoNotFound} = require('../../helpers/saldoConstants')

const listarExtradoPorId = async (id) => {
    const saldo = await repository.listarExtradoPorId(id)
    if(saldo.length > 0) return saldo
    return saldoNotFound
}

module.exports = { 
    listarExtradoPorId
}