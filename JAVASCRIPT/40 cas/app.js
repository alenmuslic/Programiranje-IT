function main(other) {
  console.log("Ovo je glavna funkcija");
  other(3, 4, 5);
}

function aritmeticka(a, b, c) {
  console.log(+((a + b + c) / 3).toFixed(2));
}
main(aritmeticka);
