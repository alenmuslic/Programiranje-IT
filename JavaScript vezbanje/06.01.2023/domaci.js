// Iz nekog niza izdvojiti sve parne brojeve
function funkcija(niz) {
  let novi = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
      novi.push(niz[i]);
    }
  }
  return novi;
}
console.log(funkcija(["0", "2", "3", "4", "222"]));

// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];

function types(niz) {
  let stringTipa = 0;
  let numberTipa = 0;
  let booleanTipa = 0;
  let nizTipa = 0;
  for (item of niz) {
    if (typeof item === "string") {
      stringTipa++;
    } else if (typeof item === "number") {
      numberTipa++;
    } else if (typeof item === "boolean") {
      booleanTipa++;
    } else if (item instanceof Array) {
      nizTipa++;
    }
  }
  return `U datom nizu su se nasla: \n ${stringTipa} stringova,
   \n ${numberTipa} brojeva, \n ${booleanTipa} booleana,
   \n ${nizTipa} nizova.`;
}

console.log(types(nizz));
