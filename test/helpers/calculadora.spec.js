const chai = require('chai')

const assert = chai.assert

const calculadora = require('../../src/helpers/calculadora')

describe("Minhas operações de calculo com TDD", ()=>{
    it('Deve retornar a soma com resultado 2', ()=>{
        const expected = 2
        assert.equal(calculadora.sum(1,1), expected)
    })

    it('Deve retornar subtração com resultado 0', ()=>{
        const expected = 0
        assert.equal(calculadora.sub(1,1), expected)
    })
})