const { execute } = require('../../helpers/database')

const { ReasonPhrases } = require("http-status-codes")

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

const buscarUsuarioPorId = async (id, h) => {
    try {
        const sqlStatement = `select * from usuarios WHERE id = ${id};`

        const queryExecutada = await execute(sqlStatement)

        if (!queryExecutada) return { message: ReasonPhrases.BAD_REQUEST }

        return queryExecutada
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

const criarUsuario = async (nome, email, cpf, encryptedPassword) => {
    try {
        const buscarDados = await buscarUsuarios()

        for (const item of buscarDados) {
            if (item.cpf == cpf) return { message: errorsRepositories.cpfRepetido }
            if (item.email == email) return { message: errorsRepositories.emailRepetido }
            if (item.email == email && item.cpf == cpf) return { warning: "E-mail e CPF já cadastrados na Gamabank!" }
        }

        const sqlStatement = `
        INSERT INTO usuarios (nome, email, cpf, senha)
        VALUES ("${nome}","${email}", "${cpf}", "${encryptedPassword}");`

        const resultado = await execute(sqlStatement)
        // for (const item of buscarDados) {
        //     if (item.email == email && item.cpf == cpf) return { warning: "usuario cadastrado com sucesso!" }
        // }
        const criacaoContaIdGerado = resultado.insertId

        const queryParaCriacaoDaConta =
            `INSERT INTO contas (idUsuario) values (${criacaoContaIdGerado});`

        await execute(queryParaCriacaoDaConta)

        return { message: 'Usuário cadastrado!' }
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

const depositoUsuario = async (idUsuario, valor) => {
    try {
        const sqlStatement = `update contas set saldo = saldo + ${valor} where idUsuario = ${idUsuario};`
        const sqlStatement2 = `INSERT INTO movimentacoesInterna (valor, idUsuario, idTransacao) values (${valor}, ${idUsuario}, 3);`

        await execute(sqlStatement)
        await execute(sqlStatement2)

        return { message: 'Valor depositado!' }
    } catch (err) {
        console.log(err)
    }
}

const depositoUsuarioExterno = async (cpf, valor, email, cpfdepositante) => {
    try {
        

        const sqlStatement = `select u.id, u.nome, u.email, u.cpf from usuarios u 
        inner join contas c ON u.id = c.idUsuario where u.email = "${email}" and u.cpf = "${cpf}";`
        const result =  await execute(sqlStatement)

        var string = JSON.stringify(result);
        var id =  JSON.parse(string);
    
        const sqlStatement2 = `update contas set saldo = saldo + ${valor} where idUsuario = ${id[0].id};`
        const sqlStatement3 = `INSERT INTO movimentacoesExterna (cpf_depositante, email_usuario, valor, idUsuario, idTransacao) 
        values ("${cpfdepositante}", "MARCELO@TESTE.COM", ${valor}, ${id[0].id}, 3);`
 
        await execute(sqlStatement)
        await execute(sqlStatement2)
        await execute(sqlStatement3)

        return { message: 'Valor depositado!' }
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
    buscarUsuarioPorEmail,
    depositoUsuario,
    depositoUsuarioExterno
}