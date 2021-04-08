const usuariosData = require('../data/usuariosData')
const crypto = require('../../helpers/encryptPassword')

exports.buscarUsuarios = async () => {
  console.log(await usuariosData.buscarUsuarios())
  return usuariosData.buscarUsuarios()
}

exports.buscarUsuarioPorId = async (id) => {
  try {
    return await usuariosData.buscarUsuarioPorId(id)
  } catch (err) {
    console.log(err)
  }
}

exports.criarUsuario = async (sqlStatement) => {
  const { senha } = sqlStatement
  try {
    const encrypt = await crypto.encryptPassword(senha)
    return usuariosData.criarUsuario(sqlStatement, encrypt)
  } catch (err) {
    console.log(err)
  }
}

exports.deletarUsuarioPorId = async (sqlStatement) => {
  try {
    return usuariosData.deletarUsuarioPorId(sqlStatement)
  } catch (err) {
    console.log(err)
  }
}

exports.alterarUsuarioPorId = async (id, sqlStatement) => {
  try {
    return usuariosData.alterarUsuarioPorId(id, sqlStatement)
  } catch (err) {
    console.log(err)
  }
}