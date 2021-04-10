const { expect } = require('chai')

const validaSenha = require('../../../src/helpers/validaSenha')

describe("Função de validação de senhas especiais", () => {
  it('Deve retornar TRUE caso a senha atenda os requisitos',
    () => {
      const resultado = validaSenha("Panodeprado123@")
      expect(resultado).to.be.equal("Panodeprado123@")
    })

  it('Deve retornar FALSE se não digitar uma senha válida', () => {
    const resultado = validaSenha("panodeprato")
    expect(resultado).to.be.equal(false)
  })
})