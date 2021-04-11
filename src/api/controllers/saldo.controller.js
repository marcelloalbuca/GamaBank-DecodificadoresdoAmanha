const service = require('../services/saldo.service')

const listarExtratoPorId = async (id, h) => {
  try {
    return await service.listarExtratoPorId(id, h)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  listarExtratoPorId
}