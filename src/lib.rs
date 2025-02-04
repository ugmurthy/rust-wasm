use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(n1: i64, n2: i64) -> i64 {
    n1 + n2
}
