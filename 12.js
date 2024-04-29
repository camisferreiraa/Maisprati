// Exercicio 12
// Rode no terminal dando o comando "node 12.js" e veja ser gerado os numeros divididos por 11, que dão resto igual a 5, do intervelado 1000 até 1999

for (let i = 1000; i <= 1999; i++) {
    if (i % 11 === 5) {
        console.log(i);
    }
}