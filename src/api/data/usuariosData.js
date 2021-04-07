const database = require('../../infraestructure/database')

exports.criarUsuario = async (sqlStatement, passEncrypted) => {
  try {
    return new Promise((resolve, reject) => {
      const { nome, email, cpf } = sqlStatement

      const queryString = `INSERT INTO usuarios (nome, email, cpf, senha) 
    values ("${nome}", "${email}", "${cpf}", "${passEncrypted.encryptedPassword}");`

      database.query(queryString, (err, result) => {
        reject(err)
        resolve(result)
      })
    })
  } catch (error) {
    console.log('erro na query com o banco', error)
  }
}

exports.buscarUsuarios = () => {
  return new Promise((resolve, reject) => {
    database.query('select * from usuarios;', (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
}

exports.buscarUsuarioPorId = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    database.query(`select * from usuarios WHERE id = ${sqlStatement};`, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
}

exports.deletarUsuarioPorId = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    database.query(`delete from usuarios where id = "${sqlStatement}";`, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
}

exports.alterarUsuarioPorId = (id, sqlStatement) => {
  return new Promise((resolve, reject) => {
    database.query(`update usuarios set senha="${sqlStatement}" where id = "${id}";`, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
}