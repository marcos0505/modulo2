// Calculadora de media 5 notas

// const input = require("readline-sync");

// const nome = input.question( " Qual seu nome? ");
// var not1 = Number (input.question("Digite sua primeira nota: "));
// var not2 = Number (input.question("Digite sua Segunda nota: "));
// var not3 = Number (input.question("Digite sua terceira nota: "));
// var not4 = Number (input.question("Digite sua Quarta nota: "));
// var not5 = Number (input.question("Digite sua quinta nota: "));

// const media = parseFloat(not1+not2+not3+not4+not5)/5

// if (media >= 7.0) {
//     console.log("Ola! " + nome + " Você foi aprovado,sua média foi " + media)
// } else if (media >= 4.5 && media <=6.9) {
//     console.log(" Olá! " + nome + " Você está em recuperação, sua média foi " + media) 
// } else {
//     console.log("Olá! " + nome + " Você foi reprovado, estude mais, sua média foi " + media)
// }

//contador de letras

// var ler = 'A turma do backend do senac, e massa!';

// console.log('A frase é:' + ler, + ler.length);
//console.log('A qunatidade de letras é:' + contador.length);

//Inversor de letras

// let curso = 'desenvolvimanto web';
// let invert = curso.split('').reverse().join('');

// console.log('Estou estudando: ' + curso);
// console.log('A frase invertida é: ' + invert);

//let curso = 'desenvolvimanto web';

//console.log('A frase é: ' + curso + ' A frase invertida é: ' + curso.split('').reverse().join(''));

const input = require("readline-sync");

const cpf = input.question( "Digite seu CPF: ");


console.log("O CPF digitado foi: " + cpf + " A quntidade de caracteres do cpf é: " + cpf.length);