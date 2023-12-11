// Desenvolver um programa que espera 2 números na entrada
// O programa vai perguntar qual operação será realizada com esses números (divisão, subtração, multiplicação e soma)
// Irá dar a resposta da operação selecionada

const readline = require ("readline");

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular (numero1, numero2, operador){
    switch (operador) {
        //case: define um bloco de dados em que será executado se "operador" for igual ao que foi especificado no terminal
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2
        case "*":
            return numero1 * numero2
        case "/":
            return numero2 !== 0 ? numero1 / numero2 : "Não há divisão por zero."
        default:
            return "Escolha +, -, * ou /";
    }
} 

function solicitar () {
   terminal.question("Digite o primeiro número para a operação:", function (numero1){
    terminal.question("Digite o segundo número para a operação:", function (numero2){
        numero1 = +numero1;
        numero2 = +numero2;

        terminal.question("Escolha o operador desejado sendo + para somar, - para subtrair, * para multiplicar e / para divisão:", function(operador) {

            if(operador === "/" && numero2 === 0){
                console.log("Operação inválida! Para divisão o segundo número não pode ser zero!");
                terminal.close()
                return;
            }

            let resolver = calcular(numero1, numero2, operador);

            console.log("Resultado:", resolver);

            terminal.close()
        });
    });
   });
}
solicitar();
