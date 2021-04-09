const database = require('../../infraestructure/database')

database.connect()

exports.criarUsuario = async (sqlStatement, passEncrypted) => {
  try {
    return new Promise((resolve, reject) => {
      const { nome, email, cpf } = sqlStatement
      const queryString = `INSERT INTO usuarios (nome, email, cpf, senha) 
    values ("${nome}", "${email}", "${cpf}", "${passEncrypted.encryptedPassword}");`
      database.query(queryString, (err, rows) => {
        reject(err)
        resolve(rows)
      })
    })
  } catch (error) {
    console.log(error)
  }
}

exports.buscarUsuarios = () => {
  try {
  return new Promise((resolve, reject) => {
    database.query('select * from usuarios;', (err, rows) => {
      if (err) return reject(err)
      resolve(rows)
      // database.end()
     console.log(rows)
    })
  })
  } catch (error) {
    database.restart();
    console.log(error)
  }
}

exports.buscarUsuarioPorId = (sqlStatement) => {
  try {
  return new Promise((resolve, reject) => {
    database.query(`select * from usuarios WHERE id = ${sqlStatement};`, (err, rows) => {
      if (err) return reject(err)
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
      if (err) return reject(err)
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
      if (err) return reject(err)
      resolve(rows)
    })
  })
} catch (error) {
  console.log(error)
}
}

//EXTRATOS

const queryExtratos =(id)=> {
  return(
    `select u.id, u.nome as user_name, t.nome as transaction_name, c.valor, c.data_criacao from usuarios u
    inner join compras c on c.idUsuario = u.id 
    inner join transacoes t on c.idTransacao = t.id
    WHERE u.id = ${id} ORDER BY c.data_criacao desc;`
  )
}

// console.log(queryExtratos(2))

exports.listarExtratosPorId = (id) => {
  try {
  return new Promise((resolve, reject) => {
    database.query(queryExtratos(id), (err, result) => {
      if (err) return reject(err)
      resolve(result)
      // database.end()
     console.log(result)
    })
  })
  } catch (error) {
    database.restart();
    console.log(error)
  }
}