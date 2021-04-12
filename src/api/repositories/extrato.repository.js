const { StatusCodes } = require('http-status-codes')
const { execute } = require('../../helpers/database')

const listarExtratoPorId = async (id, h) => {
    try {
        const sqlStatement = `select u.id, u.nome as usario_nome, t.nome as transacao_nome, c.valor, c.data_criacao as data from  usuarios u
        inner join compras c on c.idUsuario = u.id 
        inner join transacoes t on c.idTransacao = t.id
        WHERE u.id = ${id}
        union 
        select u.id, u.nome as usario_nome, t.nome as transacao_nome, mi.valor, mi.data_criacao as data from usuarios u
        inner join movimentacoesInterna mi on mi.idUsuario = u.id 
        inner join transacoes t on mi.idTransacao = t.id
        WHERE u.id = ${id}
        union
        select u.id, u.nome as usario_nome, t.nome as transacao_nome, me.valor, me.data_criacao as data from usuarios u
        inner join movimentacoesExterna me on me.idUsuario = u.id 
        inner join transacoes t on me.idTransacao = t.id
        WHERE u.id = ${id}
        order by data DESC;`

        const resultado = await execute(sqlStatement)

        if (!resultado) h
            .response({ messageError: 'Erro nos dados do usuário!' }).code(StatusCodes.BAD_REQUEST)

        return h.response(resultado).code(200)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    listarExtratoPorId
}