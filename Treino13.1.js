const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite um numero: "));
//console.log("Qual o número digitado: " + num1);

let num2 = Number(prompt("Digite outro número: "));
//console.log("Qual o número digitado:" + num2);

let soma = num1 + num2;
console.log("A soma é: " + soma);
