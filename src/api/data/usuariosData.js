const database = require('../../infraestructure/database')

exports.criarUsuario = async (sqlStatement, passEncrypted) => {
  const { nome, email, cpf } = sqlStatement
  await database.query(`INSERT INTO usuarios (nome, email, cpf, senha) 
  values ("${nome}", "${email}", "${cpf}", "${passEncrypted.encryptedPassword}");`)
}

exports.buscarUsuarios = () => {
  return new Promise((resolve, reject) => {
    database.query('select * from usuarios;', (err, rows) => {
      if (err) return reject(err)
      resolve(rows)
    })
  })
}

exports.buscarUsuarioPorId = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    database.query(`select * from usuarios WHERE id = ${sqlStatement};`, (err, rows) => {
      if (err) return reject(err)
      resolve(rows)
    })
  })
}

exports.deletarUsuarioPorId = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    database.query(`delete from usuarios where id = "${sqlStatement}";`, (err, rows) => {
      if (err) return reject(err)
      resolve(rows)
    })
  })
}

exports.alterarUsuarioPorId = (id, sqlStatement) => {
  return new Promise((resolve, reject) => {
    database.query(`update usuarios set senha="${sqlStatement}" where id = "${id}";`, (err, rows) => {
      if (err) return reject(err)
      resolve(rows)
    })
  })
}