const service = require('../services/saldo.service')
const {ReasonPhrases, StatusCodes} = require('http-status-codes')

const listarExtratoPorId = async (id) => {
  try {
    console.log("AQUI ESTOU NO CONTROLLER", id)
    return await service.listarExtratoPorId(id)
  } catch (err) {
    console.log(err)
  }
}

  module.exports = {
    listarExtratoPorId
}