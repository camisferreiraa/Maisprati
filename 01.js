//Exercicio 01
//Rode no terminal dando o comando "node 01.js" insira valor em graus celcuis e veja  a conversão para fahrenheit.

const prompt = require('prompt-sync')();

let grausCelcius = prompt('Insira a temperatura em Celcius:');
const constante = 1.8;
let formula = (grausCelcius*constante)+32;
console.log(`A temperatura ${grausCelcius}°C corresponde a ${Math.round(formula)}°F`);44