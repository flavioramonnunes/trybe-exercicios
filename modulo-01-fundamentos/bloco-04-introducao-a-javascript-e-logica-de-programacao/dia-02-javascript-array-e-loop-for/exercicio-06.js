//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumberCounter = 0;

for(index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 == 1)
        oddNumberCounter++;
}

if(oddNumberCounter > 0)
    console.log(oddNumberCounter);
else console.log("nenhum valor ímpar encontrado");