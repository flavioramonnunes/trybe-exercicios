//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra){
    let arrayPalavraInvertida = palavra.split('');
    arrayPalavraInvertida = arrayPalavraInvertida.reverse();

    let palavraInvertida = arrayPalavraInvertida.join('');

    if(palavra == palavraInvertida)
        return true;
    else return false;
}

console.log(verificaPalindrome("arara"));