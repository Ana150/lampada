"use strict"


const lampada = document.getElementById('lampada')

function botoesLidaDesliga(estadoLiga, estadoDesliga, estadoPisca){    
    const botaoLigar = document.getElementById('ligar')
    const botaoDesligar = document.getElementById('desligar')
    const botaoPiscar = document.getElementById('piscar')

    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
    botaoPiscar.disabled = estadoPisca
}

let idDesligar
let idLigar

function lampadaQuebrada (){
    const lampada = document.getElementById("lampada")
    return lampada.src.indexOf('quebrada') !== -1
}

function ligarLampada() {
    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        botoesLidaDesliga(true, false, false)
    }   
}

function desligarLampada() {

    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesLidaDesliga(false, true, false)
    }
}

function pararPiscar(){
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

function piscar() {
    const botaoPiscar = document.getElementById('piscar')
    if (botaoPiscar.textContent == 'Piscar'){
        idLigar = setInterval(ligarLampada, 500)
        idDesligar = setInterval(desligarLampada, 1000)
        botaoPiscar.textContent = 'Parar'
    }else{
        pararPiscar()
        botaoPiscar.textContent = 'Piscar'
    }  
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLidaDesliga(true, true, true)
}


//eventos
document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click", desligarLampada)
document.getElementById('lampada').addEventListener("mouseover", ligarLampada)
document.getElementById('lampada').addEventListener("mouseleave", desligarLampada)
document.getElementById('lampada').addEventListener("dblclick", quebrarLampada)
document.getElementById('piscar').addEventListener("click", piscar)