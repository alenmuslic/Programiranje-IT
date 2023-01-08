//Obnavljanje
let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);

//  unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
const niz = ["Jan", "March", "April", "June"];
niz.unshift("Muslic");
console.log(niz);

//shift oduzima elemente iz niza
niz.shift();
console.log(niz);

// delete keyword za brisanje odredjenog elementa unutar niza:
// delete niz[2];
// console.log(niz);
// ostavlja tragove to jest <1 empty item>

//concat metoda spaja 2 ili vise niza na primer:
// niz2 = ["Samra", "Hatidza", "Edina"];
// obaNiza = niz.concat(niz2);
// console.log(obaNiza);

// Iz nekog niza izdvojiti sve parne brojeve
// const parnibr = (niz) => {
//   const parni = [];
//   for (let broj of niz) {
//     if (broj % 2 === 0) {
//       parni.unshift(broj);
//     }
//   }
//   return parni;
// };
// console.log(parnibr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// item instance of Array je proveravanja da li je unetai element niz

//   Za dodavanje elementa (ili elemenata) na proizvoljnu poziciju, koristi se komanda splice

niz.splice(3, 2, "Feb");
console.log(niz);

//pop uklanja element sa poslednjeg mesta primer:
let nizz = niz.pop();
console.log(nizz);

//NOVO
//Sortiranje nizova
// Sortiranje nizova predstavlja uredjivanje niza.Uređivanje niza u neopadajući poredak.
let brojevi = [2, 1, 4, 3, 5, 4, 7, 6];
brojevi.sort();
console.log(brojevi);

// Spajanje niza u nisku znakova
// VRSI SE PREKO JOIN METODE
//PRIMER:

let rec = ["h", "a", "t", "i", "d", "z", "a"];
let rec1 = rec.join("");
console.log(rec1);
