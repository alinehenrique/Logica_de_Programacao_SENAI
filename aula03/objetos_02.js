function fazerLogin(login, senha) {
  const usuario = {
    login: "pedro",
    senha: "123",
    dados: {
      nome: "Pedro de tal",
      idade: 25,
      altura: 1.7,
      notas: [5, 10, 5, 6],
    },
  };

  if (login !== usuario.login) {
    return "Login errado.";
  }

  if (senha !== usuario.senha) {
    return "Senha errada.";
  }

  return "Login realizado com sucesso!";
}

console.log(fazerLogin("pedro", "123"));
