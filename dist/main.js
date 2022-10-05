"use strict";
const nameUser = 'Priscilla';
const idade = 31;
const statusUser = 3;
if (idade <= 2) {
    console.log("Bebê");
}
else if (idade <= 11) {
    console.log("Criança");
}
else if (idade <= 19) {
    console.log("Adolescente");
}
else if (idade <= 59) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
if (statusUser == 1) {
    console.log("Usuário");
}
else if (statusUser == 2) {
    console.log("Empresa");
}
else if (statusUser == 3) {
    console.log("Admin");
}
else {
    console.log("Status inválido");
}
switch (statusUser) {
    case 1:
        console.log("Usuário");
        break;
    case 2:
        console.log("Empresa");
        break;
    case 3:
        console.log("Admin");
        break;
    default:
        console.log("Status inválido");
}
console.log(`Seja bem-vindo(a) ao curso de TypeScript, ${nameUser}`);
//1920
//1921
//1922
//1923
//...
//2022
//estrutura de repetição
const yearFactory = new Date().getFullYear();
for (let x = 1920; x <= yearFactory; x++) {
    console.log(x);
}
let y = 10; //10
console.log(++y * 2, "pré-incremento"); //antes de qualquer coisa, incrementa o valor e depois faz a operação 11 * 2 = 22
console.log(y++ * 2, "pós-incremento"); // 11 * 2 = 22, depois incrementa o valor 12
console.log(y, "pegadinha");
let operacao = 100;
console.log(--operacao * 10); //tira 1 antes de qualquer coisa
console.log(operacao); //operador unario, altera o proprio valor, entao retorna 99
console.log(operacao++ * 10); // multiplica e só depois incrementa o valor
console.log(operacao);
console.log("-------------------------------------");
for (let c = yearFactory; c >= 1920; c--) {
    console.log(c);
}
console.log("-------------------------------------");
for (let d = yearFactory; d >= 1920; d = d - 10 /*ou d -= 10*/) {
    if (d >= 1990 && d < 2000) { //ignora estes anos
        continue;
    }
    console.log(d);
}
console.log("-------------------------------------");
for (let tabNum = 0; tabNum <= 10; tabNum++) {
    if (tabNum >= 3 && tabNum <= 9) {
        if (tabNum % 2 && tabNum > 3) {
            console.log("."); //5, 7, 9
        }
        continue;
    }
    console.log(`2 x ${tabNum} = ${tabNum * 2}`);
}
