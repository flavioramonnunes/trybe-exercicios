let nomeDaPeca = "cavalo";
let nomeDaPecaEmMinusculo = nomeDaPeca.toLowerCase();

switch(nomeDaPecaEmMinusculo){
    case "rei":
        console.log("rei -> move-se para qualquer lado, porém uma casa por vez.");
        break;
    case "dama":
        console.log("dama -> move-se para qualquer lado, independente da quantidade de casas.");
        break;
    case "bispo":
        console.log("bispo -> move-se somente na diagonal.");
        break;
    case "cavalo":
        console.log("cavalo -> move-se em L.");
        break;
    case "torre":
        console.log("torre -> move-se para frente, para trás, para a esquerda ou para a direita.");
        break;
    case "peao":
        console.log("peao -> move-se para frente, porém uma casa por vez.");
        break;
    default:
        console.log("Erro: peça inválida!");
}