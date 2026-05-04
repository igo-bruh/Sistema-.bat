// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use std::process::Command;

#[tauri::command]
fn open_cmd() {
    Command::new("cmd")
        .args(["/C", "start", "", "cmd.exe"])
        .spawn()
        .expect("Failed to open cmd");
}

#[tauri::command]
fn scandisk(){
    Command::new("cmd")
        .args(["/C", "scandisk"])
        .spawn()
        .expect("Failed to run scandisk");
}

#[tauri::command]
fn update_drivers(){
    Command::new("cmd")
        .args(["/C", "winget upgrade --all"])
        .spawn()
        .expect("Failed to run driver update");
}

#[tauri::command]
fn clean_temp_files(){
    Command::new("cmd")
    .args(["/C", "cleanmgr"])
    .spawn()
    .expect("Failed to clean temp files");
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, open_cmd, scandisk, update_drivers, clean_temp_files])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
