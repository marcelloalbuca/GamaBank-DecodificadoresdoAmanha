const usuariosData = require('../data/usuariosData')
const crypto = require('../../helpers/encryptPassword')

exports.buscarUsuarios = async () => {
  return await usuariosData.buscarUsuarios()
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

//LISTAGEM EXTRATO
exports.listarExtratosPorId = async (id) => {
  try{
    const rows = await usuariosData.listarExtratosPorId(id)
    return rows
  }catch (err){
    throw err
  }
}