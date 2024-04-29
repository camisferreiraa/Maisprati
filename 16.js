
/* EXcercico - 16 -
Este código irá imprimir os 50 números primos depois de 100, para execúta-lo, basta abrir o terminal e dar um "node 16.js*/


let contador = 0;
let numero = 101; 

function numPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

while (contador < 50)
{
    if (numPrimo(numero)) {
        console.log(numero);
        contador++;
    }
    numero++;
}
