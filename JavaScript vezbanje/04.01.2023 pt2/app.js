// Datu recenicu prikazati malim i velikim slovima
// IvAn IgRa FuDbAl sA nIkOlOm
recenicaa = "IvAn IgRa FuDbAl sA nIkOlOm";
let velikaSlova = recenicaa.toUpperCase();
let malaSlova = recenicaa.toLowerCase();
console.log(velikaSlova);
console.log(malaSlova);

// Ispisati nocu recwnicu gde ce svaka rec pocinjati velikim slovom
const recenica1 = "Alen vezba programiranje, danas je sreda";
let novaRecenica = "";
for (i = 0; i < recenica1.length; i++) {
  if (i === 0) {
    novaRecenica = novaRecenica + recenica1[i].toUpperCase();
  } else if (recenica1[i - 1] === " ") {
    novaRecenica += recenica1[i].toUpperCase();
  } else {
    novaRecenica += recenica1[i];
  }
}
console.log(novaRecenica);

// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog. Dok ako je neki karakter = "a", neka se ispise broj 5. A u slucaju da je karakter jednak "s", neka se ne ispise nista.

const recenica2 = prompt("Ko je najveca 🐸  : ");
const duzina = recenica2.length;
for (let i = 0; i < duzina; i++) {
  if (recenica2[i] === "h") {
    console.log("z");
  } else if (recenica2[i] === "a") {
    console.log("a");
  } else if (recenica2[i] === "t") {
    console.log("b");
  } else if (recenica2[i] === "i") {
    console.log("i");
  } else if (recenica2[i] === "d") {
    console.log("c");
  } else if (recenica2[i] === "z") {
    console.log("a");
  } else if (recenica2[i] === "a") {
    console.log("a");
  } else {
    console.log(recenica2[i]);
  }
}

// Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
const recenica = prompt("Unesite neku recenicu");
let novaRecenica2 = "";
for (let i = 0; i < recenica.length; i++) {
  if (
    i === recenica.length - 1 ||
    recenica[i + 1] === "." ||
    recenica[i + 1] === ","
  ) {
    novaRecenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    novaRecenica2 += recenica[i].toUpperCase();
  } else {
    novaRecenica2 += recenica[i];
  }
}
console.log(novaRecenica2);

// Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
const recenica3 = prompt("Unesite recenicu: ");
let novaRecenica3 = "";
for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === "a" && recenica3[i + 1] === "n") {
    novaRecenica3 += "d";
  } else if (recenica3[i] === "a") {
    novaRecenica3 += "t";
  } else {
    novaRecenica3 += recenica3[i];
  }
}
console.log(novaRecenica3);
