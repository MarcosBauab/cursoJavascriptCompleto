var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

var msg = document.getElementById('horas')
var imagem = document.getElementById('img')
if (hora < 13 ){
    img.src = 'manha.png'
    document.getElementById('h').innerHTML = 'Bom dia!'
    document.getElementById('corpo').style.background = '#ebe3d6'
} else if (hora < 18) {
    document.getElementById('h').innerHTML = 'Boa tarde!'
    img.src = 'fototarde.png'
    document.body.style.background = '#ac745b'
} else {
    document.getElementById('h').innerHTML = 'Boa noite!'
    img.src = 'fotonoite.png'
    document.body.style.background = '#002c65'
}
function relogio(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
if (min < 10){
    msg.innerHTML = (`Agora são ${hora}:`+`0${min}:${seg}`)
} else {
    msg.innerHTML = (`Agora são ${hora}:${min}:${seg}`)
}
}
window.setInterval ('relogio()',1000)