//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.

let numero = 7;
let piramide = [];
let piramideModificada = [];

function criaAsteriscos(quantidadeDeAsteriscos){
    let asteriscos = "";

    for(let k = 1; k <= quantidadeDeAsteriscos; k++){
        asteriscos = asteriscos + "*";
    }

    return asteriscos;
}

function remocaoDeAsteriscos(aster){
    let stringNova = "";

    for(let m = 0; m < aster.length; m++){
        stringNova = stringNova + " ";

        if(aster[m] == "*"){
            stringNova = stringNova + aster.slice(m+2);
            break;
        }
    }

    return stringNova;
}

function criaEspacoVazio(stringComAsteriscos){
    let novaString = "*";
    let contador = 0;

    for(let p = stringComAsteriscos.length-2; p >=0; p--){

        if(p != 0){
            if(stringComAsteriscos[p] == "*" && stringComAsteriscos[p-1] != " ")
                novaString = " " + novaString;

            if(stringComAsteriscos[p] == "*" && stringComAsteriscos[p-1] == " ")
                novaString = "*" + novaString;
        }

        if(stringComAsteriscos[p] == " ")
            contador++;
    }

    for(let r = 1; r <= contador; r++){
        novaString = " " + novaString;
    }

    return novaString;
}

for (let i = 1; i <= numero; i = i + 2) {
    piramide.push(criaAsteriscos(numero));
}

for(let j = piramide.length-2; j >= 0; j--){
    piramide[j] = remocaoDeAsteriscos(piramide[j+1]);
}

piramideModificada.push(piramide[piramide.length-1]);

for(let t = piramide.length-2; t >= 0; t--){
    piramideModificada.push(criaEspacoVazio(piramide[t]));
}

for (let a = piramideModificada.length-1; a >=0; a--) {
    console.log(piramideModificada[a]);
}