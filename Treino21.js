const prompt = require('prompt-sync')();

var x = Number (prompt("Digite um número: "));

var y = Number (prompt("Digite outro número: "));

let operacao = (prompt("Digite a operacao: ")); 

let soma = x + y; 

let subtracao = x - y;

let multiplicacao = x * y;

let divisao = x / y;

switch(operacao){

case "soma":
    console.log("A soma é:" + soma);
    break;     
case "subtracao":
    console.log("A subtração é: " + subtracao);
    break;
case "multiplicacao":
    console.log("A multiplicação é: " + multiplicacao);    
    break;
case "divisao":
    console.log("A divisão é: " + divisao);
    break;
    default:
}
