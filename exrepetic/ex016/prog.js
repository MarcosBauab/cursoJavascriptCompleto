function contar(){
    var inicio = document.querySelector('input#txtin')
    var fim = document.querySelector('input#txtfim')
    var texto = document.getElementById('mostrar')
    if (inicio.value.length == 0 || fim.value.length == 0){
        texto.innerHTML = ('Impossível contar!')
    } else {
        inicio = Number(document.querySelector('input#txtin').value)
        fim = Number(document.querySelector('input#txtfim').value)
        passo = Number(document.querySelector('input#passo').value)
        texto.innerHTML = ('')
        if (inicio < fim){
            //contagem crescente
            if (passo == 0){ 
                window.alert('[ERRO] Considerando passo 1!')
                passo = 1
                for (let c = inicio;c <= fim;c += passo){
                texto.innerHTML += (`${c} `) + String.fromCodePoint(0x1F449)
                }
            } else {
                while (inicio <= fim){
                texto.innerHTML += (`${inicio} `) + String.fromCodePoint(0x1F449)
                inicio += passo
                }
            }
        } else if (inicio > fim){
            //contagem decrescente
            for (var c = inicio;c >= fim;c = c-passo){
                texto.innerHTML += (`${c} `) + String.fromCodePoint(0x1F449)
            }
        }
        texto.innerHTML += String.fromCodePoint(0x1F6D1) 
    }
}