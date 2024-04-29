//Exercicio 03
//Rode no terminal dando o comando "node 03.js" insira os quatros valores e veja os calculos para cada inteiro inserido.


const prompt = require('prompt-sync')();


let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');
let num3 = prompt('Digite o terceiro número:');
let num4 = prompt('Digite o qaurto número:');

calculo1 = parseInt(num1) + 25
calculo2 = parseInt(num2) * 3
calculo3 = parseInt(num3) / 100 * 12
calculo4 = parseInt(num1) + parseInt(num2) + parseInt(num3);


console.log("A soma 1° inteiro + 25 é:", calculo1);
console.log("A multiplicação 2° inteiro é:", calculo2);
console.log("12% do 3° inteiro é:", calculo3);
console.log("A soma dos três inteiros é:", calculo4);