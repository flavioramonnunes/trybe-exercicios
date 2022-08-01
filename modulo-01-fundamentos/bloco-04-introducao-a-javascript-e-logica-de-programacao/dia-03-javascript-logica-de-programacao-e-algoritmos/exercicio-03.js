//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 1; index < array.length; index++) {
    if(array[index].length > maiorPalavra.length)
        maiorPalavra = array[index];
    if(array[index].length < menorPalavra.length)
        menorPalavra = array[index];
}

console.log(maiorPalavra);
console.log(menorPalavra);