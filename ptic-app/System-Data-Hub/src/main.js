import { invoke } from '@tauri-apps/api/core';

function openCmd() {
  invoke('open_cmd');
}

function scandisk(){
  invoke('scandisk');
}
function limpa(){
  invoke('limpeza')
}
function attdriver(){
  invoke('attdriver')
}

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
  })
  document.getElementById('dash').addEventListener('click', () => {
    invoke('scriptmenu');
  });
  document.getElementById('clean').addEventListener('click', () =>{
    invoke('limpeza')
  });
  document.getElementById('update').addEventListener('click', () => {
    invoke('attdriver')
  });
  document.getElementById('form').addEventListener('click', () => {
      invoke('formatar')
  });
    document.getElementById('formatC').addEventListener('click', () => {
      invoke('formatarc')
    });
    document.getElementById('formatD').addEventListener('click', () => {
      invoke('formatard')
    });
    document.getElementById('formatF').addEventListener('click', () => {
      invoke('formatarf')
    });
    document.getElementById('formatG').addEventListener('click', () => {
      invoke('formatarg')
    });
    document.getElementById('btn-r').addEventListener('click', () => {
      invoke('restart')
    });
    document.getElementById('btn-s').addEventListener('click', () => {
      invoke('sleep')
    });
    document.getElementById('btn-t').addEventListener('click', () => {
      invoke('turnoff')
    });
});

