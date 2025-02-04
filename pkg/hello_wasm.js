
let imports = {};
let wasm;
/**
 * @param {bigint} n1
 * @param {bigint} n2
 * @returns {bigint}
 */
module.exports.add = function(n1, n2) {
    const ret = wasm.add(n1, n2);
    return ret;
};

const path = require('path').join(__dirname, 'hello_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

