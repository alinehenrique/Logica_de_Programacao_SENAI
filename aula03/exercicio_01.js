function calculaMedia(numeros) {

  let soma = 0;

  numeros.forEach(function (numero) {
    soma += numero;
  });

  return soma / numeros.length;
}

console.log(calculaMedia([5, 10, 8, 8]));
