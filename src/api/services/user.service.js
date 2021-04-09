const repository = require('../repositories/user.repository')

const createAccount = async (newUser) => {
    // Opcional : verificar no banco de dados se usuario ja existe
    const result = await repository.save(newUser)
    return result
}

const buscarUsuarios = async () => {
    return await repository.buscarUsuarios()
}

const buscarUsuarioPorId = async (id) => {
    const result = await repository.buscarUsuarioPorId(id)
    return result
}

const criarUsuario = async () => {
    const result = await repository.criarUsuario()
    return result
}

const deletarUsuarioPorId = async (id) => {
    const result = await repository.deletarUsuarioPorId(id)
    return result
}

const alterarUsuarioPorId = async (id) => {
    const result = await repository.alterarUsuarioPorId()
    return result
}

module.exports = { 
    createAccount, 
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId
}