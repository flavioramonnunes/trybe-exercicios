//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenorInteiro(arrayDeInteiro){
    let menorInteiro = arrayDeInteiro[0];
    let indiceDoMenorInteiro = 0;

    for(let key in arrayDeInteiro){
        if(arrayDeInteiro[key] < menorInteiro){
            indiceDoMenorInteiro = key;
        }
    }

    return indiceDoMenorInteiro;
}

console.log(indiceDoMenorInteiro([2, 4, 6, 7, 10, 0, -3]));