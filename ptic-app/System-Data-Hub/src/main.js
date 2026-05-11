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
    document.getElementById('redeip').addEventListener('click', () => {
      invoke('redeip')
    });
    document.getElementById('CuC').addEventListener('click', () => {
      invoke('cunitc')
    });
    document.getElementById('DuD').addEventListener('click', () => {
      invoke('dunitd')
    });
    document.getElementById('FuF').addEventListener('click', () => {
      invoke('funite')
    });
    document.getElementById('GuG').addEventListener('click', () => {
      invoke('gunitg')
    });
    document.getElementById('vscode').addEventListener('click', () => {
      invoke('dvscode')
    });
    document.getElementById('discord').addEventListener('click', () => {
      invoke('ddiscord')
    }); 
    document.getElementById('spotify').addEventListener('click', () => {
      invoke('dspotify')
    });
    document.getElementById('firefox').addEventListener('click', () => {
      invoke('dfirefox')
    });
    document.getElementById('steam').addEventListener('click', () => {
      invoke('dsteam')
    });
    document.getElementById('zapzap').addEventListener('click', () => {
      invoke('dzapzap')
    });
    document.getElementById('tarefa-btn').addEventListener('click', () => {
      invoke('tarefa')
    });
    document.getElementById("powershell-btn").addEventListener('click', () => {
      invoke('powershell')
    });
});

