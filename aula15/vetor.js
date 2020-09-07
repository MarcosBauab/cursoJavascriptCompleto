let quant = [1,2,3,4,5]
/*for (let cont=0;cont<quant.length;cont++){
    console.log(`A posição ${cont} tem o valor ${quant[cont]}`)
}*/
//A mesma coisa nos dois.
for(let cont in quant){
    console.log(`A posição ${cont} tem o valor ${quant[cont]}`)
}