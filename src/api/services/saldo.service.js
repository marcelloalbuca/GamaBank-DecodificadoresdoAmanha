const repository = require('../repositories/saldo.repository')

const listarExtratoPorId = async (id, h) => {
    try {
        return await repository.listarExtratoPorId(id, h)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    listarExtratoPorId
}