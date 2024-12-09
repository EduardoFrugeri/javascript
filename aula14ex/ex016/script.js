function contar(){
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPassos')
    let res = document.getElementById('res')
    let resultado = document.getElementById('resultado')


    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] falta dados')} 
        else{
            res.innerText = 'Contando:'
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)

            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} 👉 `
          
            }
            resultado.innerHTML += `--------------- Fim ---------------`
            
        }
        
}