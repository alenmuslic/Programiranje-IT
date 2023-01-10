// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
const brojevi = [-5, 6, 10, 45, 99, -44];

function maxEl(niz) {
  niz.sort((a, b) => b - a);
  return niz[0];
}
console.log(brojevi);

//II nacin
console.log(math.max.apply(null, brojevi));

//III

//indexOf() metoda nam vraca poziciju elementa koji se nalazi u nizu

const niz = ["Hatidza,", "Bakir", "Amer", "Alen"];
// const bakir=niz.indexOf("Bakir")
const bakir = niz.indexOf("Omar");
console.log(bakir);

const omar = niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar");
console.log(omar);

const hatidza = niz.indexOf("Hatidza", 1);
console.log(hatidza);

//lastIndexOf() metoda vraca poziciju poslednjeg elementa koji predstavlja argument date metode
//lastIndexOf() metoda vraca -1 ako se neki element ne nalazi u nizu.
//Kada imamo 2 ista element u nizu indexOf ce nam dati prvi broj
