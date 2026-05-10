// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![turnoff, restart, sleep, formatarc, formatard, formatarf, formatarg, attdriver, open_cmd, rodar, scandisk, scriptmenu, limpeza])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn open_cmd() {
    Command::new("cmd")
        .args(["/C", "start", "", "cmd.exe"])
        .spawn()
        .expect("Failed to open cmd");
}

#[tauri::command]
fn rodar() {
    Command::new("cmd")
        .args(["/C", "start", "", "cmd.exe"])
        .spawn()
        .expect("falhou a executar o script");
}

#[tauri::command]
fn scandisk() {
    Command::new("cmd")
        .args(["/C", "chkdsk /f"])
        .spawn()
        .expect("Failed to open scandisk");
}

#[tauri::command]
fn scriptmenu() {
    Command::new("cmd")
        .args(["/C", "../../../Sistema-.bat-main/initialcommit.bat", "cmd.exe"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn limpeza(){
    Command::new("cmd")
        .args(["/C", "cleanmgr"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn attdriver(){
    Command::new("cmd")
        .args(["/C", "winget upgrade --all --include-unknown"])
        .spawn()
        .expect("deu pau fdp");
}
use std::env;

#[tauri::command]
fn formatarc(){
    Command::new("cmd")
        .args(["/C", "format C: /FS:NTFS /Q /V:NovaUnidade"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn formatard(){
    Command::new("cmd")
        .args(["/C", "format D: /FS:NTFS /Q /V:NovaUnidade"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn formatarf(){
    Command::new("cmd")
        .args(["/C", "format F: /FS:NTFS /Q /V:NovaUnidade"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn formatarg(){
    Command::new("cmd")
        .args(["/C", "format G: /FS:NTFS /Q /V:NovaUnidade"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn turnoff(){
    Command::new("cmd")
        .args(["/C", "shutdown /s /t 5"])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn restart(){   
    Command::new("cmd")
        .args(["/C", "shutdown /r /t 5 "])
        .spawn()
        .expect("Failed to run script");
}
#[tauri::command]
fn sleep(){
    Command::new("cmd")
        .args(["/C", "rundll32.exe powrprof.dll,SetSuspendState 0,1,0"])
        .spawn()
        .expect("Failed to run script");
}