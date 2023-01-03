//INTERSAKCIJA SA KORISNIKOM
// promt ( ,eroda ma, slizo za komunikaciju sa korisnikom)

const ime = prompt("Unesite vase ime:");
console.log(ime);
const godine = prompt("unesite godine:");
console.log(godine);
console.log(typeof godine);

// Sad je neophodno godine prevesto u broj:

//Postoje 2 nacina za prevodjenje stringa u broj:

//1. Number (promenjive)
const brojGodina = Number(godine);
console.log(brojGodina);
console.log(typeof brojGodina);

//2. +promenjive
const brojGodina2 = +godine;
console.log(brojGodina2);
console.log(typeof brojGodina2);

const visina = +prompt("Unesite svoju visinu u centrimetrima");
console.log(visina);
console.log(typeof visina);
