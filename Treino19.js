const prompt = require('prompt-sync')();

var numero = prompt("Digite um número: ");

switch(numero % 2)
{
case 0:
    console.log(" O número é par.");
    break;
    default:
    console.log("o numero é impar.");
    break;   
}