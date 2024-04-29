//Exercicio 11
//Rode no terminal dando o comando "node 11.js" e insira um número para verificar se é PAR ou IMPAR

const prompt = require('prompt-sync')();

let numero = prompt('Digite um número inteiro: ')

while (numero > 0) {
    if (numero % 2 === 0) {
        console.log('O número é PAR')
    } else {
        console.log('O número é ÍMPAR')
    }
    numero = parseInt(prompt('Digite um número inteiro: '))
}
