const valorDeVenda = 9;
const custo = 3;

let imposto = 0.20;
let custoTotal = custo + (imposto*custo);

let lucro;
let quantidadeDeProdutos = 1000;

if(custo < 0 || valorDeVenda < 0)
    console.log("Erro: entrada inválida.");
else {
    lucro = (valorDeVenda - custoTotal) * quantidadeDeProdutos;
    console.log("Lucro: " + lucro);
}