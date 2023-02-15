// splice() metoda je najmocnija alatka kod nizova u JavaScriptu.
// Omogucava nam promene u nizu na zeljenoj poziciji.
//  1.  Mozemo dodati (koliko hocemo) elemenata na nekom mestu;
//  2. Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu;

const niz = [
  "Dzenan", //0
  "Bakir", //1
  "Amer", //2
  "Aladin", //3
  "Haris", //4
  "Merisa", //5
  "Hatidza", //6
  "Alen", //7
  "Emin", //8
  "Hamed", //9
  "Miona", //10
];

// splice() metoda uzima minimum 2 argumenta:
// Prvi argument predstavlja poziciju od koje ce se vrsiti neke promene;
// Drugi argument predstavlja broj elemenata koje brisemo iz niza.
// niz.splice(2, 6);
// console.log(niz);

// Treci argument predstavlja vrednost koja ce se dodati na mestu koje smo definisali prvim argumentom.
// Svi ostali argumenti su takodje vrednosti koje se dodaju unutar niza.
niz.splice(2, 1, "Tarik");
console.log(niz);

// Iz niza izbrisati sve devojke;
// Iz niza izbrisati sve muskarce;
// Na petom elementu dodati "Tarik", a na kraju niza dodati "Omar";

// 1.
niz.splice(5, 2);
niz.splice(8, 1);
console.log(niz);

niz.splice(0, 5);
console.log(niz.splice(2, 3));
console.log(niz);

// 3.
// console.log(niz.splice(4, 0, "Tarik"));
// niz.splice(niz.length, 0, "Omar");
// console.log(niz);

//splice() metoda nam vraca niz sa izbrisanim elementima.

// slice() metoda vraca novi niz sa uzetim delom originalnog niza.
const skraceniNiz = niz.slice(3, 5);
console.log(skraceniNiz);

// Izostavljanjem drugog argumenta kod slice metode se uzima ostatak niza.
// const skraceniNiz2 = niz.slice(5);
// console.log(skraceniNiz2);
