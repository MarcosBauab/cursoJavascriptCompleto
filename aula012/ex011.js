var idade = 667
console.log(`Você tem ${idade} anos, portanto seu voto é:`)
if (idade < 16) {
    console.log('Não vota :(')
} else {
    if (idade < 18 || idade >= 65){
        console.log('Voto opcional opcionalmente')
    } else if (idade < 65) {
        console.log('Vota sem querer!')
    }
}