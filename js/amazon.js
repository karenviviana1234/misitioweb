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
function cerrar(){
  mainContent.style.display = "none";
}
function abrir(){
  boxmodal.classList.add("visible")
}
window.onload = () => {
  boxmodal.classList.remove("visible")
}

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let imgprin = document.getElementById("imgprin");
img1.addEventListener("click",() => {
  imgprin.setAttribute("src", "img/amazon1.jpg");
});
img2.addEventListener("click",() => {
  imgprin.setAttribute("src", "img/amazon2.jpg");
});
img3.addEventListener("click",() => {
  imgprin.setAttribute("src", "img/amazon3.jpg");
});
img4.addEventListener("click",() => {
  imgprin.setAttribute("src", "img/amazon4.jpg");
});
img5.addEventListener("click",() => {
  imgprin.setAttribute("src", "img/amazon5.jpg");
});
img6.addEventListener("click",() => {
  imgprin.setAttribute("src", "img/amazon6.jpg");
});