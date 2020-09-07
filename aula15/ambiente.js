let num = [4,2]
num[2] = 1
num.push(3)
num.sort()
console.log(`Vetor = ${num}`)
console.log(`Posições = ${num.length}`)
console.log(`O primeiro valor = ${num[0]}`)
let proc = num.indexOf(5)
if(proc == -1){
    console.log(`O número 5 não existe no vetor!`)
}
//console.log(`O número 2 está na posição ${proc}`)
