let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, L){
    if (L.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let itens = document.createElement('Option')
        itens.text = `Valor ${num.value} adicionado.`
        lista.appendChild(itens)
        res.innerHTML = ''  
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<P>O maior valor informado foi ${maior}</P>`
        res.innerHTML += `<P>O menor valor informado foi ${menor}</P>`
        res.innerHTML += `<P>Somando todos os valores temos ${soma}</P>`
        res.innerHTML += `<P>A média dos valores é ${media}</P>`
        


    }
}