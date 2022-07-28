const salarioBruto = 3000.00;
let salarioLiquido;
let salarioBase;
let valorDaAliquotaDoINSS;
let valorIR;

if(salarioBruto <= 1556.94)
    valorDaAliquotaDoINSS = 0.08 * salarioBruto;
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92)
    valorDaAliquotaDoINSS = 0.09 * salarioBruto;
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82)
    valorDaAliquotaDoINSS = 0.11 * salarioBruto;
else valorDaAliquotaDoINSS = 570.88;

salarioBase = salarioBruto - valorDaAliquotaDoINSS;

if(salarioBase <= 1903.98)
    valorIR = 0;
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65)
    valorIR = (0.075 * salarioBase) - 142.80;
else if(salarioBase >= 2826.66 && salarioBase <= 3751.05)
    valorIR = (0.15 * salarioBase) - 354.80;
else if(salarioBase >= 3751.06 && salarioBase <= 4664.68)
    valorIR = (0.225 * salarioBase) - 636.13;
else valorIR = (0.275 * salarioBase) - 869.36;

salarioLiquido = salarioBase - valorIR;

console.log("Salário Líquido: " + salarioLiquido);