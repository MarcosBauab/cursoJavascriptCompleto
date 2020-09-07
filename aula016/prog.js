let selec = document.querySelector('#sel')
let valReceb = []
let divEscondida = document.querySelector('#lista')


function but(){   
        
        let inputNum = document.querySelector('input#tab')
        
        if (inputNum.value.length == 0){
            alert('Insira um número!')
        } else {
            if (Number(inputNum.value) > 100 || Number(inputNum.value) < 1) {
                alert('Insira um valor válido!') 
            } else {
        
                const procura = valReceb.indexOf(Number(inputNum.value))
        
                if (procura >= 0){
                    window.alert('Valor já adicionado!')
                } else {
                    valReceb.push(Number(inputNum.value))
                    valReceb.sort((a, b) => a-b )
                    let item = document.createElement('option')
                    item.value = `${Number(inputNum.value)}`
                    item.text = `Número ${Number(inputNum.value)} adicionado`
                    selec.appendChild(item)
                    divEscondida.innerHTML = ''
                    console.log(valReceb)
            
                }
            }
        } 
        inputNum.value = ''
        inputNum.focus()
    
}

document
    .querySelector('#botao')
    .addEventListener('click', () => {
          
        if (valReceb == 0){
            alert('Insira valores para começar!')
        } else {
            divEscondida.innerHTML = '<li id="cadastrados">Números cadastrados:</li><li id="maior">Maior valor:</li><li id="menor">Menor valor:</li><li id="soma">Soma de todos:</li><li id="media">Média:</li>' 
            let cad = document.querySelector('#cadastrados')
            let maior = document.querySelector('#maior')
            let menor = document.querySelector('#menor')
            let soma = document.querySelector('#soma')
            let media = document.querySelector('#media')
            cad.innerHTML += ` ${valReceb.length}`
            maior.innerHTML += ` ${valReceb[valReceb.length - 1]}`
            menor.innerHTML += ` ${valReceb[0]}`

            var num = 0
            for (let c = 0; c < valReceb.length; c++){
                num += valReceb[c]
            }
            soma.innerHTML += ` ${num}`
            media.innerHTML += ` ${num/valReceb.length}`
        }   })

     



