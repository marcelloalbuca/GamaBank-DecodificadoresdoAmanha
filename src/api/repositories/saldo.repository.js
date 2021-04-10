const { execute } = require('../../helpers/database')

const listarExtradoPorId = async (id) => {


    try {
        const sqlStatement =     `select u.id, u.nome as usario_nome, t.nome as transacao_nome, c.valor, c.data_criacao as data, c.idConta, cn.saldo from  usuarios u
        inner join compras c on c.idUsuario = u.id 
        inner join transacoes t on c.idTransacao = t.id
        inner join contas cn on c.idConta = cn.id
        WHERE u.id = "${id}"
        union 
        select u.id, u.nome as usario_nome, t.nome as transacao_nome, mi.valor, mi.data_criacao as data, mi.idConta, cn.saldo from usuarios u
        inner join movimentacoesInterna mi on mi.idUsuario = u.id 
        inner join transacoes t on mi.idTransacao = t.id
        inner join contas cn on mi.idConta = cn.id
        WHERE u.id = "${id}"
        union
        select u.id, u.nome as usario_nome, t.nome as transacao_nome, me.valor, me.data_criacao as data, me.idConta, cn.saldo from usuarios u
        inner join movimentacoesExterna me on me.idUsuario = u.id 
        inner join transacoes t on me.idTransacao = t.id
        inner join contas cn on me.idConta = cn.id
        WHERE u.id = "${id}"
        order by data DESC;`
        
        return await execute(sqlStatement)
        } 
        catch (error) {
            console.log(error)
            throw error
        }
}

module.exports = {
    listarExtradoPorId
}