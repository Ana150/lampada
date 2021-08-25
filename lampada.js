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

function piscarLampada() {

    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        lampada.src = "img/ligada.jpg"
        botoesLidaDesliga(false, false, true)
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    botoesLidaDesliga(true, true, true)
}


//eventos
document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click", desligarLampada)
document.getElementById('piscar').addEventListener("click", piscarLampada)
document.getElementById('lampada').addEventListener("mouseover", ligarLampada)
document.getElementById('lampada').addEventListener("mouseleave", desligarLampada)
document.getElementById('lampada').addEventListener("dblclick", quebrarLampada)