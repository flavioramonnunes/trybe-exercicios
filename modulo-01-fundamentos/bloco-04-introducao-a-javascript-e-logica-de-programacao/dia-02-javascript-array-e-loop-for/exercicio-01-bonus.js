//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux;

for (let i = 0; i < numbers.length -1; i++) {
    for (let j = 0; j < (numbers.length -1) -i; j++) {
        if(numbers[j] > numbers[j+1]){
            aux = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = aux;
        }
    }
}

console.log(numbers);