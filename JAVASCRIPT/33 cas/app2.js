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

//METODA
// Array.from()  nam vraca niz koi se pravi od nekog objka koji ima length
const noviNiz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(noviNiz);

//includes metoda nam vraca boolean u zabisnosti od toga da li se argumen nalazi u nizu

console.log(niz.includes("Emin"));

//keys() metoda vraca Array Iterator Object sa kljucevima(indeksima) nekog niza.
const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries() metoda vraca

//   function niz(array, n) {
//     if (array == null)
//     return  [0];
//   if (n == null)
//     return[0];
//   if (n < 0)
//     return [];
//   return array.slice(0, n);
// };

// console.log(niz([7, 9, 0, -2]));

const getElements = (niz, n = undefined) => {
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
};
console.log(getElements[(1, 4, 5, -3, 0, 6, 14)]);
