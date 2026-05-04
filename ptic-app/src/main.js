const { invoke } = window.__TAURI__.tauri;


function openCmd() {
  invoke('open_cmd');
}

function scandisk(){
  invoke('scandisk');
}

// Listeners para os botões
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('terminal-btn').addEventListener('click', () => {
//     invoke('open_cmd');
//   });
  document.getElementById('scandisk-btn').addEventListener('click', scandisk);
  document.getElementById('clean').addEventListener('click', () => {
    invoke('clean_temp_files');
  });
  document.getElementById('update').addEventListener('click', () => {
    invoke('update_drivers');
  });
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