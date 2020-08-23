function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        var genero = ''
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'noiteeee.png')
                   
            }else if( idade< 21){
                //Jovem
               
            }else if(idade < 50){
                //adulto
                
            }
            else{
                //idoso
            }
        } 
        res.innerHTML = `Gênero ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}