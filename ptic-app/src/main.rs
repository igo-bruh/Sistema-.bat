use std::process::Command;
#[tauri::command]
fn open_cmd() {
    Command::new("cmd")
        .args(["/C", "start", "", "cmd.exe"])
        .spawn()
        .expect("Failed to open cmd");
}
Command::new("cmd"){
    spawn()
        .expect("Failed to open cmd");
}
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![open_cmd])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
#[tauri::command]
fn scandisk(){
    Command::new("cmd")
        .args(["/C", "scandisk"])
        .spawn()
        .expect("Failed to run scandisk");

}
#[tauri::command]
fn drivers(){
    Command::new("cmd")
        .args(["/C", "winget upgrade --all"])
        .spawn()
        .expect("Failed to run driver update");
}
#[tauri::command]
fn cleanup(){
    Command::new("cmd")
    .args(["/C", "cleanmgr"])
    .spawn()
    .expect("deu pau pra limpar os arquivos temporários ");
}
.invoke_handler(tauri::generate_handler![open_cmd,scandisk,drivers,cleanup])