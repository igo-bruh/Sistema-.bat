document.addEventListener('DOMContentLoaded', () => {
let guer = document.getElementById('hamburger');
let menu = document.getElementById('sidemenu');
let close = document.getElementById('btn-close');
let overlay = document.getElementById('overlay');
guer.addEventListener('click', () => {
  menu.classList.toggle('open');
  overlay.classList.toggle('active');
});
close.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('active');
});
overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('active');
});
console.log(guer, menu, close, overlay);
});
document.getElementById('terminal-btn').addEventListener('click', () => {
  invoke('open_cmd');
});
// function teste(){
//   let negoco = document.getElementById("pop");
//   neg
// }
window.addEventListener('load', function(){
  window.location.href="index.html#pop"
  setTimeout(() => {
    window.location.href="index.html"
  }, 30000);
})
let cu = document.getElementById("cu");
cu.addEventListener('click', function(){
  window.location.href="#"
}) 