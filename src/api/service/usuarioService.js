const usuariosData = require('../data/usuariosData')
const crypto = require('../../repositories/encryptPassword')

exports.buscarUsuarios = async () => {
  const rows = await usuariosData.buscarUsuarios()
  return rows
}

exports.buscarUsuarioPorId = async (id) => {
  const rows = usuariosData.buscarUsuarioPorId(id)
  return rows
}

exports.criarUsuario = async (sqlStatement) => {
  const { senha } = sqlStatement
  const encrypt = await crypto.encryptPassword(senha)
  return usuariosData.criarUsuario(sqlStatement, encrypt)
}

exports.deletarUsuarioPorId = async (sqlStatement) => {
  return usuariosData.deletarUsuarioPorId(sqlStatement)
}

exports.alterarUsuarioPorId = async (id, sqlStatement) => {
  return usuariosData.alterarUsuarioPorId(id, sqlStatement)
}