function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora <= 5){
        //BOA MADRUGADA
        img.src = 'madrugada.jpg'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa madrugada!`
        document.body.style.background = '#110c07'
    } else if(hora >= 6 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg'
        msg.innerHTML = `Agora são ${hora} horas. <br>Bom dia!`
        document.body.style.background = '#ceb3a8'
    } else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa tarde!`
        document.body.style.background = '#a59d88'
    } else{
        //BOA NOITE
        img.src = 'noite.jpg'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa noite!`
        document.body.style.background = '#322a42'
    }
}