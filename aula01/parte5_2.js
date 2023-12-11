const notas = [5, 5, 8, 10];
let soma = 0;

for(let i = 0; i< notas.length; i++) {
    
    soma += notas [i];
}

const media = soma / notas.length;

console.log(`A média das notas é:`, media);
