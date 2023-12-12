function fazerLogin(login, senha) {
  const usuarios = [
    {
      login: "fulano",
      senha: "123",
      dados: {
        nome: "Fulano de tal",
        idade: 25,
        altura: 1.7,
        notas: [5, 10, 5, 6],
      },
    },
    {
      login: "maria",
      senha: "321",
      dados: {
        nome: "Maria da Silva",
        idade: 20,
        altura: 1.5,
        notas: [5, 3, 10, 6],
      },
    },
    {
      login: "Lucas",
      senha: "159",
      dados: {
        nome: "Lucas da Silva",
        idade: 28,
        altura: 1.75,
        notas: [5, 3, 2, 3],
      },
    },
  ];

  const usuarioEncontrado = usuarios.find(function (usuario) {
    if (usuario.login === login) {
      return true;
    }

    return false;
  });

  if (usuarioEncontrado === undefined) {
    return "Usuário não encontrado.";
  }

  if (usuarioEncontrado.senha !== senha) {
    return "Senha incorreta";
  }

  return usuarioEncontrado.dados;
}

console.log(fazerLogin("fulano", "159"));
