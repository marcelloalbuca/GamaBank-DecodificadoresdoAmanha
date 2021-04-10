const service = require('../services/saldo.service')

const buscarSaldoPorId = async (request, h) => {
    const {id} = request.params
    console.log(id)
    return await service.buscarSaldoPorId(id)
  }

  module.exports = {
    buscarSaldoPorId
}