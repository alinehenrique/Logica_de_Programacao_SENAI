// Desenvolver um programa que espera 2 números na entrada
// O programa deve somar os números no final

const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question("Digite o primeiro número: ", function (numero1) {
  
  terminal.question("Digite o segundo número: ", function (numero2) {
    
    const soma = +numero1 + +numero2;

    console.log("A soma dos números é:", soma);

    terminal.close();
  });
});

