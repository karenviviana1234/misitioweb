
        var input_cinco = document.querySelector("#input-5")
        var input_cuatro = document.querySelector("#input-4")
        var input_tres = document.querySelector("#input-3")
        var input_dos = document.querySelector("#input-2")
        var input_uno = document.querySelector("#input-1")
        var btn_resultado = document.querySelector("#btn-resultado")
        var resultado = document.querySelector("#resultado")

        var barra_cinco = document.querySelector("#resultado_cinco")
        var barra_cuatro = document.querySelector("#resultado_cuatro")
        var barra_tres = document.querySelector("#resultado_tres")
        var barra_dos = document.querySelector("#resultado_dos")
        var barra_uno = document.querySelector("#resultado_uno")
        var resultado_interno;


        btn_resultado.addEventListener("click", function() {
            resultado_interno = parseInt(input_cinco.value) + parseInt(input_cuatro.value) + parseInt(input_tres.value) + parseInt(input_dos.value) + parseInt(input_uno.value)
            resultado.innerHTML = resultado_interno

            var total_cinco = parseInt(input_cinco.value) * 100 / resultado_interno
            barra_cinco.style.width = `${total_cinco}%`

            var total_cuatro = parseInt(input_cuatro.value) * 100 / resultado_interno
            barra_cuatro.style.width = `${total_cuatro}%`

            var total_tres = parseInt(input_tres.value) * 100 / resultado_interno
            barra_tres.style.width = `${total_tres}%`

            var total_dos = parseInt(input_dos.value) * 100 / resultado_interno
            barra_dos.style.width = `${total_dos}%`

            var total_uno = parseInt(input_uno.value) * 100 / resultado_interno
            barra_uno.style.width = `${total_uno}%`

        })


