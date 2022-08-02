//Imprima os valores dos objetos um ao lado do outro.

let info = [
    {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
    },
    {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
        recorrente: 'Sim'
    }
];

console.log(info[0].personagem + " e " + info[1].personagem);
console.log(info[0].origem + " e " + info[1].origem);
console.log(info[0].nota + " e " + info[1].nota);
console.log(info[0].recorrente);