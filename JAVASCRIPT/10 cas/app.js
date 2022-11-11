// Stringovi su immutble promenjie, nijem moguce vrsiti modifikacija  postojeceg stringa .
//Alternativa je da  naoravimo novi string  i da  tada je moguce dodavati vrednost kad god zelimo

let rec1 = "Petak";
// console.log(rec1[2]);
// toUppeCase () - metoda koja pretvara ceo string u velika slova
let a = rec1.toUpperCase();
console.log(a);

// toLowerCase= pretvaraa string u mala slova
let rec2 = "VELIKI PETAK";
// console.log(rec1[2]);
let b = rec2.toLowerCase();
console.log(b);

const recenica0 =
  "Zelim DaTu ReCenIcU PriKazAti MalIm,IstO takO i VELIkIm slOvima.";
let primerv = recenica0.toUpperCase();
let primerm = recenica0.toLowerCase();
console.log(primerv);
console.log(primerm);

// PRIMER:
// Ispisati nocu recwnicu gde ce svaka rec pocinjati velikim slovom

// const recenica =
//   "sledece subote cemo imati test koji predstavlja kraj prvog cikusa nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it camp";
// let novaRecenica = "";
// for (i = 0; i < recenica.length; i++) {
//   if (i === 0) {
//     novaRecenica += recenica[i].toUpperCase();
//   } else if (recenica[i - 1] === " ") {
//     novaRecenica += recenica[i].toUpperCase();
//   } else {
//     novaRecenica += recenica[i];
//   }
// }
// console.log(novaRecenica);

// Napisati recenicu na kojoj su sva zadnja slova velika
