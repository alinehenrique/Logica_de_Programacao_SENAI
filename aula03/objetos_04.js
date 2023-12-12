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
      login: "ciclano",
      senha: "123",
      dados: {
        nome: "Ciclano de tal",
        idade: 22,
        altura: 1.5,
        notas: [3, 5, 8, 1],
      },
    },
    {
      login: "Beltrano",
      senha: "123",
      dados: {
        nome: "Beltrano da silva",
        idade: 18,
        altura: 1.7,
        notas: [3, 4, 5, 6],
      },
    },
  ];

  const usuario = usuarios.find(function (user) {
    if (user.login === login) {
      return true;
    }

    return false;
  });

  if (usuario === undefined) {
    return "Usuário não existe.";
  }

  if (usuario.senha !== senha) {
    return "Senha incorreta.";
  }

  return usuario;
}

console.log(fazerLogin("ciclano", "123"));
