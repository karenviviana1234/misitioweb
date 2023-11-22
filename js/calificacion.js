 let inputcinco = document.getElementById("input5")
let inputcuatro = document.getElementById("input4")
let inputtres = document.getElementById("input3")
let inputdos = document.getElementById("input2")
let inputuno = document.getElementById("input1")
let btn = document.getElementById("btn")
let resultado = document.getElementById("resultado")

let barracinco = document.getElementById("resultadocinco")
let barracuatro = document.getElementById("resultadocuatro")
let barratres = document.getElementById("resultadotres")
let barrados = document.getElementById("resultadodos")
let barrauno = document.getElementById("resultadouno")
let resultadointerno;


    btn.addEventListener("click", function() {
            resultadointerno = parseInt(inputcinco.value) + parseInt(inputcuatro.value) + parseInt(inputtres.value) + parseInt(inputdos.value) + parseInt(inputuno.value)
            resultado.innerHTML = resultadointerno

            let totalcinco = parseInt(inputcinco.value) * 100 / resultadointerno
            barracinco.style.width = `${totalcinco}%`

            let totalcuatro = parseInt(inputcuatro.value) * 100 / resultadointerno
            barracuatro.style.width = `${totalcuatro}%`

            let totaltres = parseInt(inputtres.value) * 100 / resultadointerno
            barratres.style.width = `${totaltres}%`

            let totaldos = parseInt(inputdos.value) * 100 / resultadointerno
            barrados.style.width = `${totaldos}%`

            let totaluno = parseInt(inputuno.value) * 100 / resultadointerno
            barrauno.style.width = `${totaluno}%`

        })
