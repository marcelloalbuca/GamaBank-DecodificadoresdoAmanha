const { execute } = require('../../helpers/database')

const { StatusCodes } = require("http-status-codes");
const { errorsRepositories } = require('../../helpers/userConstants')

const buscarUsuarios = async () => {
    try {
        const sqlStatement = `select * from usuarios;`
        const result = await execute(sqlStatement)
        return result
    }
    catch (err) {
        console.log(err)
    }
}

const buscarUsuarioPorId = async (id) => {
    try {
        const sqlStatement = `select * from usuarios WHERE id = ${id};`
        return await execute(sqlStatement)
    }
    catch (err) {
        console.log(err)
    }
}

const buscarUsuarioPorEmail = async (email) => {
    try {
        const sqlStatement = `select * from usuarios WHERE email = "${email}";`
        return await execute(sqlStatement)
    }
    catch (err) {
        console.log(err)
    }
}

const criarUsuario = async (nome, email, cpf, encryptedPassword, h) => {
    try {
        const buscarDados = await buscarUsuarios()

        for (const item of buscarDados) {
            if (item.cpf == cpf) return h
                .response({ message: errorsRepositories.cpfRepetido }).code(StatusCodes.BAD_REQUEST)
            if (item.email == email) return h
                .response({ message: errorsRepositories.emailRepetido }).code(StatusCodes.BAD_REQUEST)
        }

        const sqlStatement = `
        INSERT INTO usuarios (nome, email, cpf, senha)
        VALUES ("${nome}","${email}", "${cpf}", "${encryptedPassword}");`

        await execute(sqlStatement)
    } catch (err) {
        console.log(err)
    }
}

const deletarUsuarioPorId = async (id) => {
    try {
        const sqlStatement = `delete from usuarios where id = "${id}";`

        const result = await execute(sqlStatement)

        if (result) {
            return { messageSucess: 'usuario deletado' }
        } else {
            return { messageError: 'usuario não encontrado' }
        }
    } catch (err) {
        console.log(err)
    }
}

const alterarUsuarioPorId = async (id, senha) => {
    try {
        const sqlStatement = `update usuarios set senha="${senha}" where id = "${id}";`
        const result = await execute(sqlStatement)
        return result
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId,
    buscarUsuarioPorEmail
}