const repository = require('../repositories/saldo.repository')

const listarExtradoPorId = async (id) => {
    try {
        return await repository.listarExtradoPorId(id)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    listarExtradoPorId
}