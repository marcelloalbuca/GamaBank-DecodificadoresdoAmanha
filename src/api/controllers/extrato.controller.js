
const service = require('../services/extrato.service')
const {ReasonPhrases, StatusCodes} = require('http-status-codes')


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