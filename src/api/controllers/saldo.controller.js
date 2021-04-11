const service = require('../services/saldo.service')

const listarExtratoPorId = async (id) => {
  try {
    return await service.listarExtratoPorId(id)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  listarExtratoPorId
}