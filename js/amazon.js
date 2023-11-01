let imgtub1 = document.getElementById("imgtub1");
let imgtub2 = document.getElementById("imgtub2");
let imgtub3 = document.getElementById("imgtub3");
let imgtub4 = document.getElementById("imgtub4");
let imgtub5 = document.getElementById("imgtub5");
let imgtub6 = document.getElementById("imgtub6");
let imgtub7 = document.getElementById("imgtub7");
let imgPrincipal = document.getElementById("imgPrincipal");

imgtub1.addEventListener("click", ()=>  {
  imgPrincipal.classList.add("main-img-principal-opacity");
  imgPrincipal.setAttribute("src", "img/amazon1.jpg");
});
imgtub2.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon2.jpg");
});
imgtub3.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon3.jpg");
});
imgtub4.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon4.jpg");
});
imgtub4.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon4.jpg");
});
imgtub5.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon5.jpg");
});
imgtub6.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon6.jpg");
});
imgtub7.addEventListener("click", ()=>  {
  imgPrincipal.setAttribute("src", "img/amazon7.jpg");
});