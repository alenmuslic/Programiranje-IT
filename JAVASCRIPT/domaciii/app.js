// const recenica = prompt("Unesite neku recenicu");
// const duzina = recenica.length;
// for (let i = 0; i < duzina; i++) {
//   if (recenica[i] === "a") {
//     console.log("5");
//   } else if (recenica[i] === "s") {
//     continue;
//   } else {
//     console.log(recenica[i]);
//   }

//Ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7  neka se prekine petlja
// for (let i = 1; i <= 10; i++) {
//   if (i % 7 === 0) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

//ISPISSTI PARNE BROJEVE OD 1 DO 20 NA DVA NACINA
// for (i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5
// for (let i = 50; i < 101; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Ispisati dvostruju vrednost prirodnih brojeva od 6 do 64
// for (i = 6; i <= 7; i++) {
//   console.log(i * 2);
// }

//Zbir parnih prirodnih brojeva od 10 d0 20
// let suma = 0;
// for (i = 10; i < 21; i++) {
//   if (i % 2 === 0) {
//     suma += i;
//   }
// }
// console.log(suma);

//Pomocu while petlje ispisati parne brojeve od 1 do 12
// let i = 1;
// while (i <=  12) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis kvadrata brojva od 1 do tog unetog broja
// let broj = +prompt("Unesite broj");
// for (i = 1; i <= broj; i++) {
//   console.log(i * i);
// }

// Na osnovu toga koji je broj manji, iteracija se vrsi od njega na veceg broja.Ispisuje se brojevi od manjem ka vecem
// let broj1 = +prompt("Unesite prvi broj");
// let broj2 = +prompt("Unesite drugi broj");
// if (isNaN(broj1 || broj2)) {
//   console.log("Niste uneli brojeve");
// }
// if (broj1 > broj2) {
//   while (broj2 <= broj1) {
//     console.log(broj2);
//     broj2++;
//   }
// } else if (broj1 < broj2) {
//   while (broj1 <= broj2) {
//     console.log(broj1);
//     broj1++;
//   }
// } else if ((broj1 = broj2)) {
//   console.log("Brojevi ne smeju biti jednaki");
// }

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

// let n = +prompt("Unesite neki prirodan broj: ");
// let brojac = 0;
// let suma = 0;
// for (let broj = 1; broj <= n; broj++) {
//   if (broj % 5 === 0) {
//     brojac++;
//     suma += broj;
//   }
// }
// console.log(
//   "Ukupno ima" +
//     brojac +
//     "brojeva koji su deljivi sa 5,a njihov suma je" +
//     suma +
//     "."
// );

// Neka se izvrsi iteracija od broja 99 do -99.
// // Ispisati zbir broja deljivog sa 4 i broja 14.
// for (let i = 99; i >= -99; i--) {
//   if (i % 4 === 0) {
//     console.log(i + 14);
//   }
// }

//1.Napisati program koji na osnovu dva uneta broja od strane korisnika     Uslov.1.Ispisuje povrsinu kvadrata ako su uneti brojevi jednaki     Uslov.2.Povrsina pravougaonika ako su neti brojevi razliciti

// let a = +prompt("Unesite duzinu a");
// let b = +prompt("Unesite duzinu b");

// if (isNaN(a) || isNaN(b)) {
//   console.log("Morate uneti brojeve");
// } else if (a === b) {
//   let kvadrat = a ** 2;
//   console.log(kvadrat);
//   console.log("kvadrat");
// } else if (a !== b) {
//   let pravougaonik = a * b;
//   console.log("Pravougaonik");
//   console.log(pravougaonik);
// } else {
//   console.log("GLUP SI");
// }

// 2.Korisnik unosi dva realna broja x i y.Napi sati program koji izracunaca i s kolicnik x/y ako je broj razlicit od 0.
//a inace ispisuje poruku:Deljenje nije moguce

// let x = +prompt("Unesite duzinu x");
// console.log("x");
// let y = +prompt("Unesite duzinu y");
// console.log(y);
// if (x >= y || (x !== 0 && y !== 0)) {
//   console.log(x / y);
// } else {
//   console.log("Deljenje nije moguc");
// }

// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

const duzina = +prompt("Unesite duzinu terena");
const sirina = +prompt("Unesite sirinu terena");
const rastojanje = +prompt("Unesite rastojanje ivica terena");

if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
  console.log("Unesite broj!!");
} else if (duzina < 90 || duzina > 120) {
  console.log("Duzina mora biti izmedju 90 i 120 ");
} else if (sirina < 45 || sirina > 90) {
  console.log("Sirina mora biti izmedju 45 i 90");
} else {
  const obimTerena = 2 * duzina + 2 * sirina;
  const obimOgrade = obimTerena + 8 * rastojanje;
  console.log("Potrebno je" + obimOgrade + "m za ogradjivanje terena.");
}
