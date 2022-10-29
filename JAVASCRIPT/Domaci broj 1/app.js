// 1.Napisati program koji na osnovu dva uneta broja od strane korisnika     Uslov.1.Ispisuje povrsinu kvadrata ako su uneti brojevi jednaki     Uslov.2.Povrsina pravougaonika ako su neti brojevi razliciti
// let a = +prompt("Unesite prvi broj:");
// console.log(a);
// let b = +prompt("Unesite drugi broj:");
// console.log(b);
// if (isNaN(a) || isNaN(b)) {
//   console.log("Unete vrednosti moraju biti brojrvi");
// } else if (a === b) {
//   let kvadrat = a ** 2;
//   console.log("kvadrat");
// } else if (a !== b) {
//   let Pravougaonik = a * b;
//   console.log("Pravougaonik");
// }

// 2.Korisnik unosi dva realna broja x i y.Napi sati program koji izracunaca i s kolicnik x/y ako je broj razlicit od 0.
//a inace ispisuje poruku:Deljenje nije moguce

let x = +prompt("Unesite x:");
console.log(x);
let y = +prompt("Unesite y:");
console.log(y);
if (x >= y) {
  console.log(x / y);
} else {
  console.log("deljenje nije moguce");
}

// const x = Number(prompt("Unesite x:"));
// const y = +prompt(prompt("Unesite y:"));
// if (isNaN(x) || isNaN(y)) {
//   console.log("Vrednosti moraju biti brojevi");
// } else if (y === 0) {
//   console.log("Deljenje nulom nije moguce");
// } else {
//   console.log("Kolicnik unetih brojeva:" + x / y);
// }
