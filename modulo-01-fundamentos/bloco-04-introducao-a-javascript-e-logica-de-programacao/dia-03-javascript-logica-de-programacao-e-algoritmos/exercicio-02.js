//Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

let word = 'Tryber';
let invertedWord = "";

for(let i = word.length - 1; i >= 0; i--){
    invertedWord = invertedWord + word[i];
}

console.log(invertedWord);