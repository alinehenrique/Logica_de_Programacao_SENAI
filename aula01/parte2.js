const nome = "Aline Henrique";
const idade = 27;

if (idade !== 15) {
  console.log("É diferente");

} else {
  console.log("É igual");
}

switch (nome) {
  case "Aline Henrique":
    console.log("O nome é", nome);
    break;
  case "Vitória":
    console.log("vitória");
    break;
  default:
    console.log("Não conheço esse nome");
}
