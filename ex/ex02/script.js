
function verificar() {
    document.getElementById("quadro").style.height = "360px"
    // document.getElementById("quadro").style.transition = "height 0.3s ease"
    document.getElementById("quadro").style.marginTop = "20px"


    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('detected')

  /*  var img = document.createElement('img')
    img.setAttribute('id', 'foto') */
    var img = document.getElementById('img')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e TENTE NOVAMENTE!')
    }
    else{
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
       
        if(fsexo[0].checked){

            genero = 'Homem'

            if(idade >0 && idade <= 10){
                document.getElementById('img').style.display = "block"
                img.setAttribute('src', 'bebeh2.png')
                
                
                

                

            }
            else if(idade < 21){
                document.getElementById('img').style.display = "block"
                img.setAttribute('src', 'jovemh3.png')
                
                
               /* document.querySelector('div.img').style.backgroundImage = "url('jovemh.jpg')"
                document.querySelector('div.img').style.display = "block"*/

                
            }
            else if(idade < 50){
                document.getElementById('img').style.display = "block"
                img.setAttribute('src', 'h3.png')


            }
            else {
                
            }
    } else if (fsexo[1].checked){
            genero = 'Mulher'

            if(idade >0 && idade <= 10){
                document.getElementById('img').style.display = "block"
                img.setAttribute('src', 'bebem.webp')

            }
            else if(idade < 21){
                document.getElementById('img').style.display = "block"
                img.setAttribute('src', 'jovemm2.png')
                
            }
            else if(idade < 50){
                document.getElementById('img').style.display = "block"
                img.setAttribute('src', 'm2.png')

            }
            else {
                
            }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

       
    }
    document.querySelector("p#detected").style.display = "block"
    idade = (2024 - nasc)

}
