const { expect } = require('chai')

const validaSenha = require('../../../src/helpers/validaSenha')

// maximo de 13 letras
// minimo 2 numeros
// pelo menos 1 caractere especial
// pelo menos uma letra Maiúscula

describe("Função de validação de senhas especiais", () => {
  it('Deve retornar TRUE caso a senha atenda os requisitos',
    () => {
      const resultado = validaSenha("Panodeprado123@")
      expect(resultado).to.be.equal(true)
    })

  it('Deve retornar FALSE se não digitar uma senha válida', () => {
    const resultado = validaSenha("panodeprato")
    expect(resultado).to.be.equal(false)
  })
})