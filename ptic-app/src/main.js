import { invoke } from '@tauri-apps/api/core';

function openCmd() {
  invoke('open_cmd');
}

function scandisk(){
  invoke('scandisk');
}

// Listeners para os botões
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('terminal-btn').addEventListener('click', () => {
    invoke('open_cmd');
  });
  document.getElementById('scandisk-btn').addEventListener('click', scandisk);
  document.getElementById('clean').addEventListener('click', () => {
    invoke('clean_temp_files');
  });
  document.getElementById('update').addEventListener('click', () => {
    invoke('update_drivers');
  });
});