
let circuloBox = document.getElementById("primeroBox"); 
let toggleBox = document.getElementById("toggleBox"); 

toggleBox.addEventListener("click", function(){
  if (circuloBox.classList.contains("primeroBox")) {
    circuloBox.classList.add("primero-box-on")
    circuloBox.classList.remove("primeroBox")
    toggleBox.classList.add("toggle-box-on")
    
  }
  else{
    circuloBox.classList.add("primeroBox")
    circuloBox.classList.remove("primero-box-on")
    toggleBox.classList.remove("toggle-box-on")
  }
})
