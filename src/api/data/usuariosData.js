const database = require('../../infraestructure/database')

exports.criarUsuario = async (sqlStatement, passEncrypted) => {
  try {
    return new Promise((resolve, reject) => {
      const { nome, email, cpf } = sqlStatement
<<<<<<< HEAD

      const queryString = `INSERT INTO usuarios (nome, email, cpf, senha) 
    values ("${nome}", "${email}", "${cpf}", "${passEncrypted.encryptedPassword}");`

      database.query(queryString, (err, result) => {
        reject(err)
        resolve(result)
      })
    })
  } catch (error) {
    console.log('erro na query com o banco', error)
=======
      const queryString = `INSERT INTO usuarios (nome, email, cpf, senha) 
    values ("${nome}", "${email}", "${cpf}", "${passEncrypted.encryptedPassword}");`
      database.query(queryString, (err, rows) => {
        reject(err)
        resolve(rows)
      })
    })
  } catch (error) {
    console.log(error)
>>>>>>> 5cf4c1a8103a9afb21adc416ac76e2a287c51191
  }
}

exports.buscarUsuarios = () => {
  try {
  return new Promise((resolve, reject) => {
    database.query('select * from usuarios;', (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
  } catch (error) {
    console.log(error)
  }
}

exports.buscarUsuarioPorId = (sqlStatement) => {
  try {
  return new Promise((resolve, reject) => {
    database.query(`select * from usuarios WHERE id = ${sqlStatement};`, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
} catch (error) {
  console.log(error)
}
}

exports.deletarUsuarioPorId = (sqlStatement) => {
  try {
  return new Promise((resolve, reject) => {
    database.query(`delete from usuarios where id = "${sqlStatement}";`, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
} catch (error) {
  console.log(error)
}
}

exports.alterarUsuarioPorId = (id, sqlStatement) => {
  try{
  return new Promise((resolve, reject) => {
    database.query(`update usuarios set senha="${sqlStatement}" where id = "${id}";`, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
} catch (error) {
  console.log(error)
}
}