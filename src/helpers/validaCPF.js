const validaCPF = (cpf) => {
  // valida o tipo de dado que foi enviado, se for numero vai retornar FALSE
  if (typeof cpf !== "string") return false

  // isso fara com que o cpf que for enviado seja formatado sem os "." ou "-"
  cpf = cpf.replace(/[\s.-]*/igm, '')

  // checa a quantidade de numeros que foi enviado, retorna true se for igual a 11 (que é o padrão) se não FAKSE
  if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
    return false
  }

  let Soma
  let Resto

  Soma = 0

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  Resto = (Soma * 10) % 11

  if ((Resto == 10) || (Resto == 11)) Resto = 0
  if (Resto != parseInt(cpf.substring(9, 10))) return false

  Soma = 0

  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)

  Resto = (Soma * 10) % 11

  if ((Resto == 10) || (Resto == 11)) Resto = 0

  if (Resto != parseInt(cpf.substring(10, 11))) return false

  return true
}

module.exports = validaCPF