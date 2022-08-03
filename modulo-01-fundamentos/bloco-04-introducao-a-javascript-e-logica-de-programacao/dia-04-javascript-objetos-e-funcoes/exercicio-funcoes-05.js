//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function inteiroQueMaisSeRepete(arrayDeInteiro){
    let inteiroQueMaisSeRepete;
    let quantidadeDeVezesQueSeRepete;
    let inteiroEQuantidadeDeAparicao = {};

    arrayDeInteiro.sort();

    for(let i = 0; i < arrayDeInteiro.length-1; i++){

        if(arrayDeInteiro[i] == arrayDeInteiro[i+1]){
            if(!inteiroEQuantidadeDeAparicao[arrayDeInteiro[i]]){
                inteiroEQuantidadeDeAparicao[arrayDeInteiro[i]] = 2;
            } else {
                inteiroEQuantidadeDeAparicao[arrayDeInteiro[i]] = inteiroEQuantidadeDeAparicao[arrayDeInteiro[i]] + 1;
            }
        }
    }

    for(let key in inteiroEQuantidadeDeAparicao){
        if(!inteiroQueMaisSeRepete){
            inteiroQueMaisSeRepete = key;
            quantidadeDeVezesQueSeRepete = inteiroEQuantidadeDeAparicao[key];
        }

        if(inteiroEQuantidadeDeAparicao[key] > quantidadeDeVezesQueSeRepete){
            inteiroQueMaisSeRepete = key;
            quantidadeDeVezesQueSeRepete = inteiroEQuantidadeDeAparicao[key];
        }
    }
    return inteiroQueMaisSeRepete;
}

console.log(inteiroQueMaisSeRepete([2, 3, 2, 5, 8, 2, 3]));