let porcentagem = 85;

if(porcentagem < 0 || porcentagem > 100)
    console.log("Erro: nota (porcentagem) inválida.");
else if(porcentagem >= 90)
    console.log("Conceito A");
else if(porcentagem >= 80)
    console.log("Conceito B");
else if(porcentagem >= 70)
    console.log("Conceito C");
else if(porcentagem >= 60)
    console.log("Conceito D");
else if(porcentagem >= 50)
    console.log("Conceito E");
else console.log("Conceito F");