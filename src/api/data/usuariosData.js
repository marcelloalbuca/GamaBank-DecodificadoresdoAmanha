const database = require('../../infraestructure/database')

database.connect()

exports.criarUsuario = async (sqlStatement, passEncrypted) => {
  return new Promise((resolve, reject) => {
    const { nome, email, cpf } = sqlStatement

    const queryString = `INSERT INTO usuarios (nome, email, cpf, senha) 
      values ("${nome}", "${email}", "${cpf}", "${passEncrypted.encryptedPassword}");`

    database.query(queryString, (err, rows) => {
      reject(err)
      resolve(rows)
    })
  })
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
    database.restart();
    console.log(error)
  }
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
<<<<<<< HEAD
}
=======
} catch (error) {
  console.log(error)
}
}
<<<<<<< HEAD

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
=======
>>>>>>> 84784cceb227f48f6e1c4122454a350632f9d485
>>>>>>> dde2e25d1b907e7705d2246d697eb45c340460b6
