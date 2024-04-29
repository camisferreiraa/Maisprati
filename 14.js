// Exercicio 14
const prompt = require('prompt-sync')();

let soma = 0;
    for (let i = 0; i <numeros.length; i++) {
        soma += numeros[i];
    }

    return soma / numeros.length;

    function calcularMedia() {
        let numeros = [];
        
        while (true) {
            let numero = parseFloat(prompt("Digite um número decimal:"));
            
            if (numero === 0) {
                break;
            }
    
            numeros.push(numero);
        }
    }
    const media = calcularMediaAritmetica(numeros);
    if (typeof media === "string") {
        console.log(media);
    } else {
        console.log("A média aritmética é:", media.toFixed(2)); 
    }

    function calcularMediaAritmetica(numeros) {
        if (numeros.length === 0) {
            return "Nenhum número foi inserido!";
        }}

        calcularMedia();


