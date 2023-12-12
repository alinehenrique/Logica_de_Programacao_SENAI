function calculaMedia(numeros) {
  let soma = 0;

  numeros.forEach(function (numero) {
    soma += numero;
  });

  return soma / numeros.length;
}

const alunos = [
  {
    nome: "Fulano",
    notas: [5, 9, 8, 1],
  },
  {
    nome: "Ciclano",
    notas: [5, 6, 3, 1],
  },
  {
    nome: "Beltrano",
    notas: [5, 6, 5, 1],
  },
  {
    nome: "Deltrano",
    notas: [5, 4, 8, 1],
  },
];

alunos.forEach(function (aluno) {
  const media = calculaMedia(aluno.notas);

  const situacao = media >= 5? "passou de ano" : "reprovou";

   console.log(aluno.nome + ' ' + situacao + ' - Média: ' + media.toFixed(2));

});
