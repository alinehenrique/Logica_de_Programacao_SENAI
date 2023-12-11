const aluno1 = {
  nome: "Aline",
  sobrenome: "Henrique",
};

const aluno2 = {
  nome: "Fulano",
  sobrenome: "da Silva",
};

const alunos = [aluno1, aluno2];

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome);
}
