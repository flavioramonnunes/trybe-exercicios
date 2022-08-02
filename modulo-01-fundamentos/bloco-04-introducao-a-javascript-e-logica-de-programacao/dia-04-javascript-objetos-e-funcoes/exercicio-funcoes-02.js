//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaiorInteiro(arrayDeInteiro){
    let maiorInteiro = arrayDeInteiro[0];
    let indiceDoMaiorInteiro = 0;

    for(let key in arrayDeInteiro){
        if(arrayDeInteiro[key] > maiorInteiro){
            indiceDoMaiorInteiro = key;
        }
    }

    return indiceDoMaiorInteiro;
}

console.log(indiceDoMaiorInteiro([2, 3, 6, 7, 10, 1]));