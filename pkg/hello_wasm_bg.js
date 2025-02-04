let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
 * @param {bigint} n1
 * @param {bigint} n2
 * @returns {bigint}
 */
export function add(n1, n2) {
    const ret = wasm.add(n1, n2);
    return ret;
}

