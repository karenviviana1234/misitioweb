let Principal = document.getElementById("Principal");
let Primero = document.getElementById("Primero");

Principal.addEventListener("click", function() {
  if(Primero.classList.contains("primero")) {
    Primero.classList.add("movedizo");
    Primero.classList.remove("primero");
    segundo.classList.add();
    segundo.classList.remove();
  }
  else{
    Primero.classList.remove("movedizo");
    Primero.classList.add("primero");
    segundo.classList.remove();
    segundo.classList.add();
  }
});
