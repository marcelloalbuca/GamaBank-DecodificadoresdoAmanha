const { expect } = require('chai')
const faker = require('faker')

const mycrypto = require('../../../src/helpers/encryptPassword')

describe('Funcionalidade de encriptação de senha', async () => {
    it('Deve retornar uma senha encriptada', async () => {
        const senha = 'panodeprato'
        const salt = '$2b$10$CFhxPbcy0Glrjq0/LPJn5.'

        const { encryptedPassword } = await mycrypto.encryptPassword(senha, salt)

        expect(encryptedPassword).to.be.a('string')
    })

    it('Deve retornar TRUE se as senhas forem iguais', async () => {
        const senhaGerada = faker.internet.password(32)

        const { encryptedPassword } = await mycrypto.encryptPassword(senhaGerada, null)

        const resultadoDaComparacao = await mycrypto.comparePassword(senhaGerada, encryptedPassword)

        expect(resultadoDaComparacao).to.be.equal(true)
    })
})