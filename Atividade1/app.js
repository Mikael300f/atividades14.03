const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

const num1 = 10;
const num2 = 5;

console.log(`Resultado da soma: ${somar(num1, num2)}`);
console.log(`Resultado da subtração: ${subtrair(num1, num2)}`);
console.log(`Resultado da multiplicação: ${multiplicar(num1, num2)}`);
console.log(`Resultado da divisão: ${dividir(num1, num2)}`);