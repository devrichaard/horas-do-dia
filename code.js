function carregar() {
    var fundo = window.document.getElementById('corpo') // Puxei o body do HTML
    var get = new Date() // Criei um date para poder colocar as hora atuai (HORA REAL)
    var hora_atual = get.getHours() // Puxei a horas atuais
    var resposta = window.document.getElementById('teste') // puxei a div 
    var photo = document.createElement('img') // crie uma tag IMG
    photo.setAttribute('id', 'foto') //  Setei os atributos
    if (hora_atual == '' && hora_atual == '') {
        resposta.innerHTML = "São horas online, Porfavor não tire o valor de (horas_atual)" // Validação caso a pessoa tire as horas atuais e coloque nada 
    } else {
        // Sistema de horas atuais
        if (hora_atual >= 5 && hora_atual <= 12) {
            resposta.innerHTML = `<p>Agora são exatamente ${hora_atual}:00 horas da manhã</p>`
            photo.setAttribute('src', 'fotos/manha.jpg')
            fundo.style.background = '#b3c9de'
            
    
        } else if (hora_atual >= 13 && hora_atual <= 18) {
            resposta.innerHTML = `<p>Agora são exatamente ${hora_atual}:00  horas da tarde</p>`
            photo.setAttribute('src', 'fotos/tarde.jpg')
            fundo.style.background = '#ffe8a4'
        } else if (hora_atual >= 19 && hora_atual <= 23) {
            resposta.innerHTML = `<p>Agora são exatamente ${hora_atual}:00 horas da noite</p>`
            photo.setAttribute('src', 'fotos/noite.jpg')
            fundo.style.background = '#28323b'
        } else if (hora_atual >= 0 && hora_atual <= 4) {
            resposta.innerHTML = `<p>Agora são exatamente ${hora_atual}:00 horas da madrugada</p>`
            photo.setAttribute('src', 'fotos/madrugada.jpg')
            fundo.style.background = '#1b313f'
        }
    }
    resposta.style.padding = '4%'
    photo.style.padding = '10px'
    resposta.appendChild(photo)
    resposta.style.textAlign = 'center'
    /*
    No final eu corrigi algumas posicoes e coloquei para aparecer a imagem de acordo com IF OU ELSE IF    
    */
    

}