##### Compile from RUST -> WASM and use Node to run funcs

https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Rust_to_Wasm

1. install Rust (checkout : https://www.rust-lang.org/ )
2. Install wasm-pack

```
cargo install wasm-pack
```

3. create lib project

```
cargo new —lib <lib-name>
```

4. modify cargo.toml to specify crate-type to be ‘c’ dynamic library . this enable exposing Rust to a c-type callable function

```
[lib]
crate-type = [“cdylib”]
```

5. Add any dependencies to cargo.toml

```
[dependencies]
wasm-bindgen = "0.2.100"
```

6. now build it for node js enviromnent

```
wasm-pack build —target nodejs
```

7. If step 6 fails due to optimisation then add to cargo.toml

```
#[package.metadata.wasm-pack.profile.release]
#wasm-opt = false
```

8.  create index.js to use the generate wasm encased in .js file - check out ./pkg folder
