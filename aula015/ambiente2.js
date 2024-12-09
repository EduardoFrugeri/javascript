let valores= [8, 1, 7, 4, 2, 9]

/* for(let pos=0 ; pos<valores.length ; pos++){
    valores.sort()
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} */

    for( let pos in valores){ //para variaveis compostas
        console.log('a posição ${pos} tem o valor ${valores[pos]}')
    } 

    num.indexOf(7) // verifica qual a casa que o numero 7 esta localizado