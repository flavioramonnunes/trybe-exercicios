//Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let numero = 5;
let asteriscos;

for (let i = 0; i < numero; i++) {
    asteriscos = "";
    for(let j = 0; j < numero; j++){
        asteriscos = asteriscos + "*";
    }
    console.log(asteriscos);
}