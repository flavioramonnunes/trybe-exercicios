//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending){
    let wordReverse = word.split('');
    let endingReverse = ending.split('');
    let verificador = true;

    wordReverse.reverse();
    endingReverse.reverse();

    for(let i = 0; i < endingReverse.length; i++){
        if(endingReverse[i] != wordReverse[i])
            verificador = false;
    }

    return verificador;
}

console.log(verificaFimPalavra('trybe', 'be'));