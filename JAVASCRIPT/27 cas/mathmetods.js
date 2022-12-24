// Nastavak math metoda

// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neogranoceno
// console.log(Math.min(46, 54, 32, 54, 65, 324, 65, 3));

//Math.max() nam vraca najveci broj od poslatih
console.log(Math.max(46, 54, 32, 54, 65, 324, 65, 3));

const najmanji = Math.min.apply(null, [19, 55, 33]);
console.log(najmanji);

//Math.random () nam daje broj izmedju 0 i 1 sa tim sto je 0(ukljucujuci) a 1(nije ukljucen)
console.log(Math.random());
//Broj izmedju 0 i 1
const broj = Math.round(Math.random());
console.log(broj);

// Broj izmedju 0 i 5(ukljucujuci)
const broj2 = Math.round(Math.random() * 10);
console.log(broj2);

//Broj izmedju 50 i 100
const broj3 = Math.round(Math.random() * 50 + 50);
// +50 predstavlja pocetni broj odakle ce pocei da se broji
console.log(broj3);

//Math.log(x) - vraca vrednost logaritma broja x za osnovu e
//Math.log2(x) - vraca  vrednost logaritma broja x za osnovu 2
//Math.log10(x) - vraca  vrednost logaritma broja x za osnovu 10

console.log(Math.log(0.36));
console.log(Math.log1(2));
console.log(Math.log10(10));

function rastojanje(x1, x2, y1, y2) {
  const rastojanje = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1));
  return rastojanje;
}
console.log(rastojanje(1, 1, 4, 5));
