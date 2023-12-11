const arrayNumeros = [1, 2, 3, 4, 5];

const novoArrayNumeros = arrayNumeros.map(function (valor) {
  return valor * 5;
});

console.log("array:", arrayNumeros);
console.log("arrayMultiplicado:", novoArrayNumeros);

const arrayString = ["Maria", "João", "Fulano"];

const novoArrayString = arrayString.map(function (valor) {
  if (valor === "Maria") {
    return "Joana";
  }

  return valor;
});

console.log("arrayString:", arrayString);
console.log("novoArrayString:", novoArrayString);
