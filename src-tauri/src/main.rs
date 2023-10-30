use std::{time::Duration};

use ping_rs::PingError;

fn perform_ping() -> Result<u32, PingError> {
    let addr = "8.8.8.8".parse().unwrap();
    let data = [1,2,3,4];  // ping data
    let timeout = Duration::from_secs(1);
    let options = ping_rs::PingOptions { ttl: 128, dont_fragment: true };
    let result = ping_rs::send_ping(&addr, timeout, &data, Some(&options));
    match result {
        Ok(reply) => Ok(reply.rtt),
        Err(e) => Err(e)
    }
}

#[tauri::command]
fn measure_ping() -> Result<u32, String> {
    // Ping işlemini gerçekleştirin ve sonucu döndürün.
    match perform_ping() {
        Ok(ping_result) => {
            // Ping süresini konsola yazdırın.
            println!("Ping süresi: {} ms", ping_result);
            Ok(ping_result)
        }
        Err(_) => Err("Err".to_string()),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![measure_ping])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}