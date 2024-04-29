//Exercicio 02
//Rode no terminal dando o comando "node 02.js" insira a quantidade de votos nas eleições e veja a portentagem de cada grupo
const prompt = require('prompt-sync')();


let totalDeEleitores = prompt('Digite o Total de Eleitores :');
let votoBranco = prompt('Digite o número de votos em branco:');
let votoNulo = prompt('Digite o número de votos nulos:');
let votoValido = prompt('Digite o número de votos válidos:');

let porcetagemBranco = votoBranco  / totalDeEleitores * 100;
console.log(`O percentual de votos brancos é ${porcetagemBranco}%`); 
let porcetagemNulo = votoNulo  / totalDeEleitores * 100;
console.log(`O percentual de votos nulos é ${porcetagemNulo}%`); 
let porcetagemValido = votoValido  / totalDeEleitores * 100;
console.log(`O percentual de votos validos são ${porcetagemValido}%`); 
