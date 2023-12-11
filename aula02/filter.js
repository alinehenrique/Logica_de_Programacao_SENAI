const array = ["Texto", 15, 58, 85, false, "texto 2"];

console.log("Array original:", array);

const somenteNumeros = array.filter(function (valor) {

  if (typeof valor === "number") {
    return true;
  }

  return false;
});

console.log("Somente números:", somenteNumeros);

const somenteString = array.filter(function (valor) {
  if (typeof valor === "string") {
    return true;
  }

  return false;
});

console.log("Somente strings:", somenteString);
