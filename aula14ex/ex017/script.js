function contar(){
    let num = document.getElementById('inu')
    
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[ERRO]')
    } else {
        let numero = Number(num.value)

        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let itens = document.createElement('option')
            itens.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(itens)
            c++
            
            

            

        }


    }

}