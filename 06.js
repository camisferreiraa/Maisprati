//Exercicio 06
//Rode no terminal dando o comando "node 06.js" e insira os lados repectivos dos lados do triângulo para verificar se forma um triângulo e seu tipo

const prompt = require('prompt-sync')();


let lado1 = prompt('Insira o primeiro lado:');
let lado2 = prompt('Insira o segundo lado:');
let lado3 = prompt('Insira o terceira lado:');

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero. Os lados são iguais.")
    } 
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("O triângulo é isóceles. Há dois lados iguais.");
    }
    else{
        console.log("O triângulo é escaleno. Não há lados iguais.");
    }
    
} else {
    console.log("Os valores inseridos não formam um triângulo");
    }