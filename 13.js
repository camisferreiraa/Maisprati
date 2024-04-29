/* Exercicio 13
Rode no terminal e insira o numero que deseja visulalizar em uma breve tabuada
*/
const prompt = require('prompt-sync')();


function mostrarTabuada() {
    for (let i = 0; i < 5; i++) {
        let N = parseInt(prompt("Digite um número para calcular a tabuada:"));

        console.log("Tabuada de " + N + ":");

        for (let j = 1; j <= N; j++) {
            console.log(j + " x " + N + " = " + (j * N));
        }

        console.log(""); // Adiciona uma linha em branco para separar as tabuadas
    }
}

mostrarTabuada();