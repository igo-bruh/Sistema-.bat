document.addEventListener('DOMContentLoaded', () => {
let guer = document.getElementById('hamburger');
let menu = document.getElementById('sidemenu');
let close = document.getElementById('btn-close');
let overlay = document.getElementById('overlay');
let turnoff = document.getElementById("turnoff");
let turnbtn = document.getElementById("turnbtn");
turnbtn.addEventListener('click', () => {
  turnoff.classList.toggle('active');
  overlay.classList.toggle('active');
});

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
  turnoff.classList.remove('active');
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
// window.addEventListener('load', function(){
//   window.location.href="index.html#pop"
//   setTimeout(() => {
//     window.location.href="index.html"
//   }, 30000);
// })
let cu = document.getElementById("cu");
cu.addEventListener('click', function(){
  window.location.href="#"
}); 

let time = document.getElementById("time");
setInterval(() => {
  let hora =  new Date();
  time.textContent = hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' } );
}, 1000);