const service = require('../services/saldo.service')

const listarExtradoPorId = async (request, h) => {
    const {id} = request.payload
    console.log(id)
    return await service.listarExtradoPorId(id)
  }

  module.exports = {
    listarExtradoPorId
}