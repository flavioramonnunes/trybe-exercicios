//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorioDeN(n){
    let total = 0;

    for(let i = 1; i <= n; i++){
        total = total + i;
    }

    return total;
}

console.log(somatorioDeN(5));