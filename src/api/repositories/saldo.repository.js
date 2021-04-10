const { execute } = require('../../helpers/database')

const listarExtradoPorId = async (id) => {
    try {
        const sqlStatement = `select u.id, u.nome, c.saldo, c.credito from usuarios u inner join contas c ON u.id = c.id WHERE u.id =  "${id}";`
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