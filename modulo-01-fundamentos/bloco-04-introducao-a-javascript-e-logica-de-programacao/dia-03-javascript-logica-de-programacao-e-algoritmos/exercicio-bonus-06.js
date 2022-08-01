//Faça um programa que diz se um número definido numa variável é primo ou não.

let numero = 3;
let contador = 0;

for(let i = 1; i <= numero; i++){
    if(numero % i == 0)
        contador++;
}

if(contador == 1 || contador == 2)
    console.log("O número " + numero + " é primo.");
else console.log("O número " + numero + " não é primo.");