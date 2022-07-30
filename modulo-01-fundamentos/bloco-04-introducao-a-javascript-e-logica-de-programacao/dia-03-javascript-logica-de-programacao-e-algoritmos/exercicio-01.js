//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Crie um algoritmo que retorne o fatorial de 10.

let result = 1;

for(let i = 10; i >= 1; i--){
    result = result * i;
}

console.log(result);