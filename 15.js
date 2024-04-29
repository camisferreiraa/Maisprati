/*Exercicio - 15 -
 
Este exercicio tem como objetivo Fazer um algoritmos para receber um número decimal e o 
peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.*/
const prompt = require("prompt-sync")();


function calcularMediaPonderada(numeros, pesos) {
    if (numeros.length !== pesos.length || numeros.length === 0) {
        return "Entrada inválida!";
    }

    let somaProdutos = 0;
    let somaPesos = 0;

    for (let i = 0; i < numeros.length; i++) {
        somaProdutos += numeros[i] * pesos[i];
        somaPesos += pesos[i];
    }

    return somaProdutos / somaPesos;
}
function calcularMedia() {
    let numeros = [];
    let pesos = [];
    
    let numero;
    while (true) {
        numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair):"));
        if (numero === 0) {
            break;
        }

        let peso = parseFloat(prompt("Digite o peso desse número:"));

        numeros.push(numero);
        pesos.push(peso);
    }

    const media = calcularMediaPonderada(numeros, pesos);
    if (typeof media === "string") {
        console.log(media); // Em vez de alert, usando console.log para o exemplo
    } else {
        console.log("A média ponderada é:", media.toFixed(2)); // Exibindo a média com duas casas decimais
    }
}

// Chamar a função principal para começar o cálculo
calcularMedia();

