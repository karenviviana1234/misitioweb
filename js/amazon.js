
let start1 = document.getElementById("start1")
let start2 = document.getElementById("start2")
let start3 = document.getElementById("start3")
let start4 = document.getElementById("start4")
let start5 = document.getElementById("start5")
let puntuacion = document.getElementById("puntuacion").innerText
    
    if(puntuacion >= 0 && puntuacion <= 0.2) {
        start1.setAttribute("class", "fa-regular fa-star")
        start2.setAttribute("class", "fa-regular fa-star")
        start3.setAttribute("class", "fa-regular fa-star")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 0.3 && puntuacion <= 0.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 0.8 && puntuacion <= 1.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 1.3 && puntuacion <= 1.7){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 1.8 && puntuacion <= 2.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 2.3 && puntuacion <= 2.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 2.8 && puntuacion <= 3.2){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 3.3 && puntuacion <= 3.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 3.8 && puntuacion <= 4.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 4.3 && puntuacion <= 4.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
    }
    else if(puntuacion >= 4.8 && puntuacion <= 5){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-solid fa-star")
    }
    function mostrarTabla() {
      document.getElementById('tabla').style.display = 'block';
    }
    
    function ocultarTabla() {
      document.getElementById('tabla').style.display = 'none';
    }

  
let puntuacion5 = document.getElementById("puntuacion5");
let puntuacion4 = document.getElementById("puntuacion4");
let puntuacion3 = document.getElementById("puntuacion3");
let puntuacion2 = document.getElementById("puntuacion2");
let puntuacion1 = document.getElementById("puntuacion1");

puntuacion5.innerHTML = "13";
puntuacion4.innerHTML = "33";
puntuacion3.innerHTML = "33";
puntuacion2.innerHTML = "33";
puntuacion1.innerHTML = "33";

let barra1Puntaje = document.getElementById("barra1Puntaje");
let barra2Puntaje = document.getElementById("barra2Puntaje");
let barra3Puntaje = document.getElementById("barra3Puntaje");
let barra4Puntaje = document.getElementById("barra4Puntaje");
let barra5Puntaje = document.getElementById("barra5Puntaje");

let buttonGraficar = document.getElementById("buttonGraficar");

boxEstrellas.addEventListener("mouseover", function () {
  // Calcula el total de votantes
  let totalVotantes =
    parseInt(puntuacion5.innerHTML) +
    parseInt(puntuacion4.innerHTML) +
    parseInt(puntuacion3.innerHTML) +
    parseInt(puntuacion2.innerHTML) +
    parseInt(puntuacion1.innerHTML);

  // Calcula el porcentaje y actualiza la barra para cada puntuación
  barra1Puntaje.style.width = (parseInt(puntuacion5.innerHTML) * 2) + "px";
  barra2Puntaje.style.width = (parseInt(puntuacion4.innerHTML) * 2) + "px";
  barra3Puntaje.style.width = (parseInt(puntuacion3.innerHTML) * 2) + "px";
  barra4Puntaje.style.width = (parseInt(puntuacion2.innerHTML) * 2) + "px";
  barra5Puntaje.style.width = (parseInt(puntuacion1.innerHTML) * 2) + "px";
});

    
     
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let imgprin = document.getElementById("imgprin");
img1.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon1.jpg");
});
img2.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon2.jpg");
});
img3.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon3.jpg");
});
img4.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon4.jpg");
});
img5.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon5.jpg");
});
img6.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon6.jpg");
});
img7.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/amazon7.jpg");
});


let imgtub1 = document.getElementById("imgtub1");
let imgtub2 = document.getElementById("imgtub2");
let imgtub3 = document.getElementById("imgtub3");
let imgtub4 = document.getElementById("imgtub4");
let imgtub5 = document.getElementById("imgtub5");
let imgtub6 = document.getElementById("imgtub6");
let imgtub7 = document.getElementById("imgtub7");
let imgMain = document.getElementById("imgPrincipal");
let boxmodal = document.getElementById("box-modal");
let modal = document.getElementById("modal");
let mainContent = document.getElementById("mainContent");
let btnclose = document.getElementById("btnclose");

imgtub1.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon1.jpg");
});
imgtub2.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon2.jpg");
});
imgtub3.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon3.jpg");
});
imgtub4.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon4.jpg");
});
imgtub5.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon5.jpg");
});
imgtub6.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon6.jpg");
});
imgtub7.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon7.jpg");
});

function cerrar(){
  mainContent.style.display = "none";
}
function abrir(){
  boxmodal.classList.add("visible")
}
window.onload = () => {
  boxmodal.classList.remove("visible")
}