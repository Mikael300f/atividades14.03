const gerarNumerosPares = require('./gerarPares');

const N = 5;
const listaPares = gerarNumerosPares(N);

console.log(`Os primeiros ${N} números pares são:`, listaPares);