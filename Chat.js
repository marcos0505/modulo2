// const input = require("readline-sync");
// // esta entrada permite que a variavel input  utilize  a dependencia readline-sync. o comando
// console.log("Seja vindo! Vamos começar seu cadastro ")

// const idade = input.question("Qual a sua idade? ");

// if (idade >=16 && idade <18) {
//     console.log('Pode entrar, mas não pode beber')
// } else if(idade >=18) {
//     console.log("Pode beber até cair!")
// } else {
//     console.log("Entrada não permitida")
// };

const input = require("readline-sync");
 console.log("Seja vindo! Vamos correr o mais rapido que poder! ")

 const corrida = input.question("Em quanto tempo voce correu os 10Km? ");

 if (corrida <=30) {
     console.log('Parabens!!!, Voce vai para as olimpiadas')
 } else if(corrida >30 && corrida <=32) {
     console.log("Voce está na repescagem! Boa sorte!")
 } else {
     console.log("Não foi desta vez! continue treinando, e boa sorte na proxima.")
 };










 