//Exercicio 07
//Rode no terminal dando o comando "node 07.js" insira a quantidade de maças compradas e veja o valor total da compra com ou sem desconto

const prompt = require('prompt-sync')();

let  quantidade = prompt("Quantas maças foram compradas? ");

if (quantidade < 12){
    let valorTotal = quantidade * 0.30;
    console.log('O valor total da compra foi', valorTotal);
} else {
    let valorTotal =  quantidade * 0.25;
    console.log('O valor total da compra foi:', valorTotal)
}
