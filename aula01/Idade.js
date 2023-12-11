// Desenvolver um programa que espera a idade da pessoa como dado de entrada
// Exibir a mensagem "é maior de idade quando for maior que 18 anos"
// Exibir a mensagem "é menor de idade quando for menor que 18 anos"

const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question("Digite a sua idade: ", function (idade) {

  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }

  terminal.close();
});