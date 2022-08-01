//Faça uma pirâmide com n asteriscos de base.

let numero = 5;
let piramide = [];

function criaAsteriscos(quantidadeDeAsteriscos){
    let asteriscos = "";

    for(let k = 1; k <= quantidadeDeAsteriscos; k++){
        asteriscos = asteriscos + "*";
    }

    return asteriscos;
}

function remocaoDeAsteriscos(aster){
    let novaString = "";

    for(let m = 0; m < aster.length; m++){
        novaString = novaString + " ";

        if(aster[m] == "*"){
            novaString = novaString + aster.slice(m+2);
            break;
        }
    }

    return novaString;
}

for (let i = 1; i <= numero; i = i + 2) {
    piramide.push(criaAsteriscos(numero));
}

for(let j = piramide.length-2; j >= 0; j--){
    piramide[j] = remocaoDeAsteriscos(piramide[j+1]);
}

for (let a of piramide) {
    console.log(a);
}