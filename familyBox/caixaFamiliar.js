//Sistema de gastos familiar

// crie um objeto que possuirá 2 propriedades, ambas do tipo array:

// * receitas:[]
// * despesas: []

// agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo

let caixaFamilia = {
  receitas: [1500, 1500],
  despesas: [100, 1500, 500, 60]
}

function soma(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculandoCaixa() {
  const calculoReceitas = soma(caixaFamilia.receitas)
  const calculoDespesas = soma(caixaFamilia.despesas)

  let total = calculoReceitas - calculoDespesas

  let saldo = total >= 0

  let text

  if (saldo) {
    text = 'Saldo Positivo'
  } else {
    text = 'Saldo Negativo'
  }

  console.log(`seu saldo é ${text}: R$ ${total.toFixed(2)}`)
}

calculandoCaixa()
