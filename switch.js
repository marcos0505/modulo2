const input = require("readline-sync");

const diaDaSemana = input.question( " escola o dia da semana: ");


switch(diaDaSemana){
    case "segunda":
        console.log("começou a semana" );
        break;
    case 'terca':
    case 'quarta':
        console.log("Aguenta ai e pega teu café, a semana não acabou" );
        break;
    case "quinta":
        console.log("É quase sexta, mas não sextou" );
    case "sexta":
        console.log("Sextou" );
        break;
    case "sabado":
    case "domingo":
        console.log("Chegou o final de semana, bom descanço :)" );
        break;
    default:
        console.log("Não achei sua condição.");


}