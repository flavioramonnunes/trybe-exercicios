let anguloA = 55;
let anguloB = 40;
let anguloC = 85;

let somaDosAngulos = anguloA + anguloB + anguloC;

if(anguloA > 0 && anguloB > 0 && anguloC > 0){
    if(somaDosAngulos == 180)
        console.log(true);
    else console.log(false);
} else console.log("Erro: ângulo inválido!");