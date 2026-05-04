// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    system_data_hue_lib::run()
    open_cmd();
}
#[tauri::command]
fn open_cmd() {
    tauri::Builder::default()
    Command::new("cmd")
        .args(["/C", "start", "", "cmd.exe"])
        .spawn()
        .expect("Failed to open cmd");
}
#[tauri::command]
fn rodar(){
    tauri::Builder::default()
    command::new("cmd")
        .args(["/C", "start", "", "cmd.exe"])
        .spawn()
        .expect("falhan a executar o script")
}
#[tauri::command]
fn scandisk(){
    tauri::Builder::default()
    command::new("cmd")
        .args(["/C", "start", "cmd.exe"])
}
#[tauri::command]
fn scriptmenu(){
    tauri::Builder::default()
    command::new("cmd")
        .args(["/C", "../../../Sistema-.bat-main/initialcommit.bat", "cmd.exe"])
}

