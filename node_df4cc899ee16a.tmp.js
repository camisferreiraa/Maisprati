/* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: 
● Some 25 ao primeiro inteiro; 
● Triplique o valor do segundo inteiro; 
● Modifique o valor do terceiro inteiro para 12% do valor original; 
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros. */

const prompt = require('prompt-sync')();


let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');
let num3 = prompt('Digite o terceiro número:');
let num4 = prompt('Digite o qaurto número:');

num1 = parseInt(num1) + 25
num2 = parseInt(num2) * 3
num3 = parseInt(num3) / 100 * 12
num4  = parseInt(num1) + parseInt(num2) + parseInt(num3);


console.log("A soma 1° inteiro + 25 é:", num1);
console.log("A multiplicação 2° inteiro é:", num2);
console.log("12% do 3° inteiro é:", num3);
console.log("A soma dos três inteiros é:", num4);