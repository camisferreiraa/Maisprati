//Exercicio 09
// Rode no terminal dando o comando "node 09.js" e insira o codigo do produto para verificar de qual região ela é

const prompt = require('prompt-sync')();

let codigoProduto = prompt('Digite o código do produto:');

if (codigoProduto === '5' || codigoProduto === '6') {
    console.log("O produto é do sul")
} else if(codigoProduto >= '7' && codigoProduto <= '9')  {
    console.log("O produto é do norte")
} else if (codigoProduto >= '10' && codigoProduto <= '20') {
    console.log ("O produto é da leste")
} else if (codigoProduto >= '25' && codigoProduto <= '50') {
    console.log('O produto é da Oeste')
} else {
    console.log("Código de produto inválido")
}