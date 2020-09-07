function but(){
    var num = document.getElementById('tab')
    var sel = document.getElementById('sel')
    if (num.value.length == 0){
        alert('Insira um número!')
    } else {
        num = num.valueAsNumber
        sel.innerHTML = ('')
        for (let cont = 1;cont <=10;cont++){
            let item = document.createElement('option')
            item.text = `${num}x${cont} = ${num*cont}`
            item.value = `item${cont}`
            item.id = `${cont}`
            sel.appendChild(item)
        }
    }
}