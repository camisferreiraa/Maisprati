//Exercicio 08
//Rode no terminal dando o comando "node 08.js" insira dois valores e veja eles sendo organizados de forma crescente

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let  num2 = parseInt(prompt("Insira o segundo número: "));

let numeros  = [num1, num2];

numeros.sort((a, b) => a - b);
numeros.forEach(function(numero){
    console.log(numero);
})


