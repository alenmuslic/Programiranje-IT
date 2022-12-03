// replace() metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.

const recenicca = "Danas smo podelili sertifikate za HTML, CSS i JavaScript.";

let recenica2 = recenica.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica.replace("s", "t");
console.log(recenica2);
// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);
// 1. i (insensitive)
recenica2 = recenica.replace(/s/i, "A");
console.log(recenica2);
recenica2 = recenica.replace(/s/gi, "A");
console.log(recenica2);

// toUpperCase() metoda za pretvaranje celog stringa u velika slova.
console.log(recenica.toUpperCase());

// toLowerCase() metoda za pretvaranje celog stringa u mala slova.
console.log(recenica.toLowerCase());
console.log(recenica);

// concat() metoda vrsi spajanje dva ili vise stringova.

let a = "Danas je 16. cas JavaScripta.";
let b = "Bice JavaScripta i preko 50 casova.";
// Varijanta bez concat()
let c = a + " " + b;
console.log(c);

// 2. varijanta sa concat metodom
c = a.concat(b);
console.log(c);

c = a.concat(" ", b, "\nNakon toga cemo raditi React biblioteku.");
console.log(c);

// Napomena.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti).

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. Nakon toga novom stringu menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka.
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivanje".

// Функција math.ceil() увек заокружује нагоре и враћа мањи цео број већи или једнак датом броју.
// Function koristimo kada treba da pozovemo datu promenjivu
const mojaFukncija = function (recenica) {
  if (recenica.length > 9) {
    let polaDuzine;
    // if (recenica.length % 2 === 0) {
    //   polaDuzine = recenica.length / 2;
    // } else if (recenica.length % 2 !== 0) {
    //   polaDuzine = Math.ceil(recenica.length / 2);
    // }
    polaDuzine =
      recenica.length % 2 === 0
        ? recenica.length / 2
        : Math.ceil(recenica.length / 2);
    const isecak = recenica.slice(polaDuzine, recenica.length);
    const novaRecenica = isecak.replace(/a/g, "B");
    const konacno = "Ovo je novodobijena recenica, ".concat(novaRecenica);
    return konacno;
  } else {
    const recenica2 = recenica.concat(
      recenica.length,
      "nedovoljno za dalje ispitivanje."
    );
    return recenica2;
  }
};

console.log(mojaFukncija("Kraj casa"));
console.log(mojaFukncija("Kraj 2. casa rada sa stringovima."));

// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisati velikim slovima, pola recenice ispisati malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

// let recenica3="Ovo je domaci zadatak"
// console.log (recenica3.toUpperCase() )

// let recenica3="Ovo je domaci zadatak"
// console.log (recenica3.toLowerCase() )

const recenica = prompt("Unesite neku recenicu: ");
let polaDuzine;
//   if (recenica.length % 2 === 0) {
//     polaDuzine = recenica.length / 2;
//   } else {
//     polaDuzine = Math.round(recenica.length / 2);
//   }
polaDuzine =
  recenica.length % 2 === 0
    ? recenica.length / 2
    : Math.round(recenica.length / 2);
const prva = recenica.toUpperCase();
const druga = recenica.toLowerCase();
const prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
const drugaPol = recenica.substring(polaDuzine, recenica.length).toLowerCase();
//   const treca = prvaPol + drugaPol;
const treca = prvaPol.concat(drugaPol);
const cetvrta = recenica.replace(/skola/gi, "fakultet");
const peta = recenica.substr(0, 10);
const sesta = recenica.slice(-10);

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.
// const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
// console.log(isecak)
