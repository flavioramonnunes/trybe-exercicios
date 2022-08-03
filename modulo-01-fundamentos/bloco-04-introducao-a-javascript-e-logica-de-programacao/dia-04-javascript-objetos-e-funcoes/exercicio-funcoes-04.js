//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(arrayDeNomes){
    let maiorNome = arrayDeNomes[0];

    for (let nome of arrayDeNomes) {
        if(nome.length > maiorNome.length)
            maiorNome = nome;        
    }

    return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));