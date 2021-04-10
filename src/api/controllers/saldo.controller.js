const service = require('../services/saldo.service')

const listarExtradoPorId = async (id) => {
  try {
    return await service.listarExtradoPorId(id)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  listarExtradoPorId
}