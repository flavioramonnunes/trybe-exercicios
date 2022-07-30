//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 2;

function ehNumeroPrimo(n){
    let contador = 0;

    for(let i = 2; i <= n; i++){
        if(n % i == 0)
            contador++;
    }

    if(contador > 1)
        return false;
    else return true;
}

for (let numero = 2; numero <= 50; numero++) {
    if(ehNumeroPrimo(numero)){
        if(numero > maiorNumeroPrimo)
            maiorNumeroPrimo = numero;
    }
}

console.log(maiorNumeroPrimo);