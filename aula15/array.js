/*var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  items.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  console.log(items)*/
  /*var placas = [
   'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
   'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
   'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
   'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa){
  let quant = 0
  placas.forEach(function(procura) {
    if (procura == placa){
      quant++
    }
  })

  for (let cont = 0; cont < placas.length; cont++ ){
    if (placas[cont] == placa){
      quant++
    }
  }
  return quant
    
    
}
calcularValorDevido("AKX-3333")
function calcularValorDevido(placa){
  let quantidadePlaca = calcularNumeroDeEntradas(placa)
  let resultado = 0
  if (quantidadePlaca <= 20){
    resultado = quantidadePlaca*10
  } else {
    resultado = 200 + (quantidadePlaca-20)*5
  }
} */
  /*var personagens = ["Hermione", "Trinity", "Leia"]
  var filmes = ["Harry Potter", "Matrix", "Star wars"]
  var lancamentos = [2001, 1999, 1977]
  var id = 0


  if (id > filmes.length || id < 1){
    console.log("Essa não é uma opção válida.")
  } else {
    function filme(personagens,filmes,lancamentos,id)
    {
      id = this.id
      filmes = this.filmes
      lancamentos = this.lancamentos
      personagens = this.personagens

      
    }
  }*/
 