// replace() metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.

const recenica = "Danas smo podelili sertifikate za HTML, CSS i JavaScript.";
// console.log(recenica.replace("friend", "family"));

// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);
// 1. i (insensitive)fgv b
recenica2 = recenica.replace(/s/i, "A");
console.log(recenica2);
recenica2 = recenica.replace(/s/gi, "A");
console.log(recenica2);

console.log(recenica.toUpperCase());

//concat vrsi spajanje dva ili vise stringova

const rec1 = "Bas je danas lep i suncan dan";
const rec2 = "Lep i suncan dan ";
const rec3 = rec1.concat(" ", rec2);
console.log(rec3);

//2. metoda
const rec4 = rec1 + " " + rec2;
console.log(rec4);

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. Nakon toga novom stringu menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka.
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivanje".

// const mojaFunkcija = function (recenica) {
//   const string = "Danas je lep dan";
//   polaDuzine =
//   recenica.length % 2 === 0
//     ? recenica.length / 2
//     : Math.ceil(recenica.length / 2);
// const isecak = recenica.slice(polaDuzine, recenica.length);
// const novaRecenica = isecak.replace(/a/g, "B");
// const konacno = "Ovo je novodobijena recenica, ".concat(novaRecenica);
// return konacno;
// } else {
// const recenica2 = recenica.concat(
//   recenica.length,
//   "nedovoljno za dalje ispitivanje."
// );
// return recenica2;
// }
// ;

//Math.ceil vrac ceo
// const mojaFukncija = function (recenica) {
//     if (recenica.length > 9) {
//       let polaDuzine;
//       if (recenica.length % 2 === 0) {
//         polaDuzine = recenica.length / 2;
//       } else if (recenica.length % 2 !== 0) {
//         polaDuzine = Math.ceil(recenica.length / 2);
//       }
