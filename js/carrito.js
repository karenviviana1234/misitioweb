let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let subTotal =  document.getElementById("subtotal");
let numeroProductos =  document.getElementById("numeroProductos");
let valorproducto = 300000;
let auxvalorproducto = new Intl.NumberFormat("de-DE").format(valorproducto);
document.getElementById("precioUnidad").innerHTML = auxvalorproducto;

boxPlus.addEventListener("click", function(){
    // let auxCant = document.getElementById("boxCantidad").innerHTML;
    let auxCant = boxCantidad.innerHTML;
    if(auxCant < 10){
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        determinarSingularPlural(auxCant);
        calcularSubtotal();
    }
});
boxMinus.addEventListener("click", function(){
    // let auxCant = document.getElementById("boxCantidad").innerHTML;
    let auxCant = boxCantidad.innerHTML;
    if(auxCant > 0){
        auxCant--;
        boxCantidad.innerHTML = auxCant;
        determinarSingularPlural(auxCant);
        calcularSubtotal();
    }
   
});
function calcularSubtotal(){
    let subtotal = document.getElementById("subTotal").innerHTML = valorproducto * Number(boxCantidad.innerHTML);
    let valor = new Intl.NumberFormat("de-DE").format(subtotal);
    document.getElementById("subTotal").innerHTML = "$"+ valor;
}
function determinarSingularPlural(auxCant){
    if (auxCant == 1) {
    numeroProductos.innerHTML = "(" + auxCant + " Producto)"
}
else if (auxCant == 0 || auxCant > 0) {
    numeroProductos.innerHTML = "(" + auxCant + " Productos)"
} }

var eliminarValor = document.getElementById("eliminar");
eliminarValor.addEventListener("click", function () {
    window.location.reload();
});
