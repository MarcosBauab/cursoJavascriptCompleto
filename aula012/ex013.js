var h = new Date()
var h1 = h.getHours() +':'+h.getMinutes()
var dia = h.getDay()
switch (dia){
    case 0:
        console.log('Hoje é domingo!')
        break
    case 1:
        console.log('Hoje é segunda!')
        break
    case 2:
        console.log('Hoje é terça!')
        break
    case 3:
        console.log('Hoje é quarta!')
        break
    case 4:
        console.log('Hoje é quinta!')
        break
    case 5:
        console.log('Hoje é sexta!')
        break
    case 6:
        console.log('Hoje é sábado!')
        break
    default:
        console.log('Deu ruim!')
        break
}

console.log(`E são ${h1} horas.`)