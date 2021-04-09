const crypto = require('../../helpers/mycrypto')
const { execute } = require('../../helpers/database')

const { string } = require('joi')


const findByUsername = async () => {

}

const save = async (user) => {

    if(user instanceof User){
       
        const encrypt = await crypto.encryptPassword(user.password, null)

        const sqlStatement = `
            INSERT INTO users (email, password, salt)
            VALUES ("${email}", "${encrypt.encryptedPassword}", "${encrypt.salt}");`
    
        const result = await execute(sqlStatement)
        return result
    }
}

const buscarUsuarios = async () => {

        try {
        const sqlStatement = `select * from usuarios;`
        const result = await execute(sqlStatement)
        return result  
        } 
        catch (error) {
            console.log(error)
            throw error
        }
}
  
const buscarUsuarioPorId = async (id) => {

    try {

    const sqlStatement = `select * from usuarios WHERE id = 1;`   
    //const sqlStatement = `select * from usuarios WHERE id = ${id};`
    const result = await execute(sqlStatement)
    return result  
    } 
    catch (error) {
        console.log(error)
        throw error
    }
}

const criarUsuario = async (user) => {
    
    try {
        const encrypt = await crypto.encryptPassword(user.password, null)

        const sqlStatement = `
            INSERT INTO users (email, password, salt)
            VALUES ("${email}", "${encrypt.encryptedPassword}", "${encrypt.salt}");`
    
        const result = await execute(sqlStatement)
        return result  
        } 
        catch (error) {
            console.log(error)
            throw error
        }
}

const deletarUsuarioPorId = async (id) => {
    
    try {
        const sqlStatement = `delete from usuarios where id = "${id}";`
    
        const result = await execute(sqlStatement)
        return result  
        } 
        catch (error) {
            console.log(error)
            throw error
        }
}

const alterarUsuarioPorId = async (id, senha) => {
    
    try {
        const sqlStatement = `update usuarios set senha="${senha}" where id = "${id}";`
        const result = await execute(sqlStatement)
        return result  
        } 
        catch (error) {
            console.log(error)
            throw error
        }
}


module.exports = {
    save, 
    findByUsername,
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    deletarUsuarioPorId,
    alterarUsuarioPorId
}