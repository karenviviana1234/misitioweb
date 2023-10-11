let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");

boxPlus.addEventListener("click", function(){
    // let auxCant = document.getElementById("boxCantidad").innerHTML;
    let auxCant = boxCantidad.innerHTML;
    if(auxCant < 10){
        auxCant++;
        boxCantidad.innerHTML = auxCant;
    }
});

boxMinus.addEventListener("click", function(){
    // let auxCant = document.getElementById("boxCantidad").innerHTML;
    let auxCant = boxCantidad.innerHTML;
    if(auxCant > 0){
        auxCant--;
        boxCantidad.innerHTML = auxCant;
    }
    
});