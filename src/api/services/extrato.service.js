
const repository = require('../repositories/extrato.repository')
const {saldoNotFound} = require('../../helpers/saldoConstants')

const listarExtratoPorId = async (id, h) => {
    try {
        return await repository.listarExtratoPorId(id, h)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    listarExtratoPorId
}