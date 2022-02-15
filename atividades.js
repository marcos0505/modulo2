
const input = require("readline-sync");

const nome = input.question( " Qual seu nome? ");
var not1 = Number (input.question("Digite sua puimeira nota: "));
var not2 = Number (input.question("Digite sua Segunda nota: "));
var not3 = Number (input.question("Digite sua terceira nota: "));
var not4 = Number (input.question("Digite sua Quarta nota: "));
var not5 = Number (input.question("Digite sua quinta nota: "));

const media = parseFloat(not1+not2+not3+not4+not5)/5

if (media >= 7.0) {
    console.log("Ola! " + nome + " Você foi aprovado,sua média foi " + media)
} else if (media >= 4.5 && media <=6.9) {
    console.log(" Olá! " + nome + " Você está em recuperação, sua média foi " + media) 
} else {
    console.log("Olá! " + nome + " Você foi reprovado, estude mais, sua média foi " + media)
}
