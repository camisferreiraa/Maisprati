// Exercicio 04 e 05
//Rode no terminal dando o comando "node 04.js" e insira as notas para fazer a média e verificar  se foi aprovado ou reprovado.

const prompt  = require('prompt-sync')();

let nota1 = prompt('Digite sua primeira  nota: ');
let nota2 = prompt('Digite sua segunda nota: ')

let media = (parseFloat(nota1) + parseFloat(nota2)) / 2  ;

if (media >= 6) {
    console.log(`Parabens você foi aprovado e sua media foi ${media}`)
} else{
    console.log(`Infelizmente você FOI REPROVADO, sua media foi ${media}. Estude mais!`)
}