
function clicar(){
    var ano = Number(document.getElementById('ano').value)
    var masc = document.querySelector('input#msc')
    var fem = document.querySelector('input#fem')
    var escrita = document.getElementsByTagName('p')[2]
    var fano = (new Date()).getUTCFullYear()
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    var dif = fano - ano
    if (ano == 0 || ano > fano){
        alert('[ERROR] VERIFIQUE OS DADOS!')
    } else {
        escrita.innerHTML = (`Você tem ${dif} anos`)
        if (fem.checked){
            escrita.innerHTML += ' e é mulher'
            if (dif < 15){
                img.setAttribute('src', 'menina.png')
            } else if (dif < 30){
                img.setAttribute('src', 'jovena.png')
            } else if (dif < 60){
                img.setAttribute('src', 'mae.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }    else{
            escrita.innerHTML += ' e é homem'
            if (dif < 15){
                img.setAttribute('src', 'menino.png')
            } else if (dif < 30){
                img.setAttribute('src', 'eu.png')
            } else if (dif < 60){
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'velho.png')
            }
        }
    escrita.style.textAlign = 'center'
    escrita.appendChild(img)
    img.style.width = '250px'
    } 
    
}