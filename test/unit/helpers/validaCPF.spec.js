const { expect } = require('chai')

const validaCPF = require('../../../src/helpers/validaCPF')

describe("Função de validação de CPF", () => {
  it('cpf digitado sem os pontos deve ser TRUE', () => {
    const resultado = validaCPF("12345678909")
    expect(resultado).to.be.equal("12345678909")
  })

  it('cpf digitado com os caracteres especiais deve retornar TRUE', () => {
    const resultado = validaCPF("123.456.789-09")
    expect(resultado).to.be.equal("12345678909")
  })

  it('cpf com os 11 numeros repetidos devem ser FALSE', () => {
    const resultado = validaCPF("11111111111")
    expect(resultado).to.be.equal(false)
  })
})