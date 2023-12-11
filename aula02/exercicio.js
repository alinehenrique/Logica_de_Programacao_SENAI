const nomes = ["Lucas", "Maria", "Pedro"];

nomes.splice(1, 0, "Aline");

const novosNomes = nomes.map(function (nome) {
  if (nome === "Pedro") {
    return "Jack";
  }

  return nome;
});

const nomesFiltrados = novosNomes.filter(function (nome) {
  if (nome === "Maria") {
    return false;
  }

  return true;
});

console.log(nomesFiltrados.join("/"));
