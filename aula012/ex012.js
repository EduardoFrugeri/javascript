var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora > 5){
    console.log('Bom Dia')
} else if(hora < 5 && hora > 0) {
    console.log('Boa Madrugada')
}
else if (hora <= 18) {
    console.log('boa tarde')
}
else if (hora < 24){
    console.log('boa Noite')
}
