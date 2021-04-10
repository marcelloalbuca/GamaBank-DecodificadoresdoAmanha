const repository = require('../repositories/saldo.repository')

const listarExtradoPorId = async (id) => {
    try {
        const saldo = await repository.listarExtradoPorId(id)

        console.log(saldo)

        if (!saldo) return { messageError: 'não tem nada na base de dados' }

        return saldo
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    listarExtradoPorId
}