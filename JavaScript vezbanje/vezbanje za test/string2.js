const recenica =
  "zelim ovu recenicu ispisati tako da svako pocetno slovo bude veliko";
novaRecenica = "";
for (i = 0; i < recenica.length; i++) {
  if (i === 0) {
    novaRecenica = novaRecenica + recenica[i].toUpperCase();
  } else if (recenica[i - 1] === " ") {
    novaRecenica = novaRecenica + recenica[i].toUpperCase();
  } else {
    novaRecenica += recenica[i];
  }
  console.log(novaRecenica);
}

// Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
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

// Domaci zadatak.
// 1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5.

const recenica1 = prompt("Unesite neku recenicu");
brojac2 = 0;
for (i = 0; i < recenica1.length; i++) {
  if (recenica1[i] === "m" || recenica1[i] === "M") {
    brojac2++;
  }
}
console.log(brojac2);

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.
const znak = prompt("Unesite neku recenicu sa mesanim znakovima");
brojac3 = 0;
for (i = 0; i < znak.length; i++) {
  if (isNaN(znak[i])) {
    continue;
  } else {
    brojac3++;
  }
}
console.log(brojac3);

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const dan = prompt("napisi nesto");
novaRecenica3 = 0;
for (i = 0; i < dan.length; i++) {
  if (dan[i] !== " ") {
    novaRecenica3 += dan[i];
  }
}
console.log(novaRecenica3);

// Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
const recenica22 = prompt("Unesite recenicu: ");
let novaRecenica23 = "";
for (let i = 0; i < recenica22.length; i++) {
  if (recenica22[i] === "a" && recenica22[i + 1] === "n") {
    novaRecenica23 += "d";
  } else if (recenica22[i] === "a") {
    novaRecenica23 += "t";
  } else {
    novaRecenica23 += recenica22[i];
  }
}
console.log(novaRecenica23);
