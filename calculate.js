function add(a, b){
    return a + b;
}

let diff = (a, b) => a - b;

let product = (a, b) => a * b;

let div = (a, b) => a / b;

let mod = (a, b) => a % b;

module.exports = {sum : add, diff, product, div, mod}