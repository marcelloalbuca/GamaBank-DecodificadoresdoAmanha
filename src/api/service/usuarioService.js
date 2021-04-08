const usuariosData = require('../data/usuariosData')
const crypto = require('../../helpers/encryptPassword')

exports.buscarUsuarios = async () => {
  try{
  const rows = await usuariosData.buscarUsuarios()
  return rows
  }catch (err){
    throw err
  }
}

exports.buscarUsuarioPorId = async (id) => {

  try{
    const rows = await usuariosData.buscarUsuarioPorId(id)
    return rows
  }catch (err){
    throw err
  }
}

exports.criarUsuario = async (sqlStatement) => {
  const { senha } = sqlStatement
    try{
      const encrypt = await crypto.encryptPassword(senha)
      return usuariosData.criarUsuario(sqlStatement, encrypt)
    }catch (err){
      throw err
    }
}

exports.deletarUsuarioPorId = async (sqlStatement) => {
  try{
  return usuariosData.deletarUsuarioPorId(sqlStatement)
  }catch (err){
    throw err
  }
}

exports.alterarUsuarioPorId = async (id, sqlStatement) => {
  try{
  return usuariosData.alterarUsuarioPorId(id, sqlStatement)
  }catch (err){
    throw err
  }
}