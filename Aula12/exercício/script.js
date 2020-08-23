function calcular(){
    let ini = document.getElementById("ini1")
    let fim = document.getElementById("fim2")
    let pas = document.getElementById("pas3")
    var res = document.getElementById("res")

    if( ini1.value.length == 0 || fim2.value.length == 0 || pas3.value.length == 0 ){
        window.alert('[erro]')
        res.innerHTML= ''
    }else{
    res.innerHTML = `Contando: `
    let i = Number(ini1.value)
    let f = Number(fim2.value)
    let p = Number(pas3.value)
    if(i < f){
        for(let c = i; c <= f; c+= p){
            res.innerHTML +=`${c} \u{1F449}` /*o + faz parte da concatenação */
        }
        res.innerHTML +=`\u{1f3c1}`
    }else{
        for(let c = i; c >= f; c-= p){
            res.innerHTML +=`${c} \u{1F449}` /*o + faz parte da concatenação */
        }
        res.innerHTML +=`\u{1f3c1}`
    }
    


    }
}