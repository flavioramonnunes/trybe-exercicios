//Para este exercício, inverta o lado do triângulo do exercício anterior (exercicio-bonus-02.js).

let numero = 5;

function espacoEAsterisco(quantidadeTotalDeLugar, quantidadeTotalDeAsterisco){
    let espacos = "";
    let asteriscos = "";

    for(let j = 1; j <= quantidadeTotalDeLugar-quantidadeTotalDeAsterisco; j++){
        espacos = espacos + " ";
    }

    for(let k = 1; k <= quantidadeTotalDeAsterisco; k++){
        asteriscos = asteriscos + "*";
    }

    console.log(espacos + asteriscos);
}

for (let i = 1; i <= numero; i++) {
    espacoEAsterisco(numero, i);
}