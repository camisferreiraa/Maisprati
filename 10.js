// Exercicio 10 
// Rode no terminal dando o comando "node 10.js"  e insira um número inteiro para ser repetido  na tela a quantidade de vezes que você digitou
const prompt =  require("prompt-sync")();

let inteiro = prompt('Insira um número inteiro:');

for (let i = 0; i < 10; i++){
    console.log(inteiro)
}