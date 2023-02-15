//  Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
//
// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg  niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.
// const niz1 = ["alen voli hatidzu"];
// const niz = niz1.map((el) => el.toUpperCase());
// console.log(niz);

// const niz1 = [2];
// const niz = niz1.map((el) => el ** 2);
// console.log(niz);
const niz1 = [2];
const niz = niz1.map((el) => Math.sqrt(el));
console.log(niz);

const brojevi = [-5, -2, 2, 3, 5, -2, 2];
