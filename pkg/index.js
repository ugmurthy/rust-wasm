import { add } from "./hello_wasm.js";
const MAX = 1000000
console.log(`Compare timing to add first ${MAX} integers using js v/s wasm`)

function plus(a,b) {
    return a+b;
    //return BigInt(a)+BigInt(b)
}
console.time("Javascript");
let sum = 1;
for (let i = 1; i<MAX; i++) {
    sum = plus(BigInt(sum),BigInt(i));
}
console.log("Sum is ",sum)
console.timeEnd("Javascript");

console.time("WASM")
let sumr = 1;
for (let i = 1; i<MAX; i++) {
    sumr = add(BigInt(sumr),BigInt(i));
} 
console.log("Sum is ",sumr);
console.timeEnd("WASM")

