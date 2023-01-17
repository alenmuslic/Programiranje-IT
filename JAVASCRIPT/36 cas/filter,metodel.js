//filter() metoda kreira novi niz sa onim elementima koji se prosli test.
//Filter niz mozeimati maksimalno elemenata kao niz na koji se primenjuje metoa ,takodje moze biti prazan niz.

const godine = [19, 17, 18, 16, 20, 21];
const punoletni = godine.filter(function (element) {
  return element > 17;
});
console.log(punoletni);

//Napraviti nivu niz koji filtrira postojevi i vraca novi sa onim elementim starog niza gde je drugo slovo "s"

const niz = [
  "Bakir",
  "Haris",
  "Amer",
  "Dzenan",
  "Hasan",
  "Aladin",
  "Nikola",
  "Lejla",
  "Emin",
  "Alen",
  "Miona",
  "Hatidza",
];
const slovoE = niz.filter(function (element) {
  return element[1] === "e";
});
console.log(slovoE);

//Napraviti novi niz koji filtrira postojeci niz i braca nosi niz elemanta cija je duzina maksimalna 6

const najduziSest = niz.filter(function (element) {
  return niz.length <= 4;
});
console.log(najduziSest);

//Napraiti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip boolean
const newArr = ["Rec", "Dve Reci", 26, true, false, [true, false], 49, true];
const niz4 = newArr.filter((el) => typeof el === "boolean");
console.log(niz4);

// reduce() metoda vraca jednu vrednost.Iteracija se vrsi kroz ceo niz.
//sabrati sve elemente niza
// const godine = [19, 3, 4, 5, 2, 5, 7, 2, 4];
// const zbirGodina = godine.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(zbirGodina);

//Dodati pocetnu vrednost 350:
// const zbirGodina = godine.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// return zbirGodina / godine.length;
// console.log(zbirGodina);

const prosek = (arr) => {
  const duzina = arr.length;
  const suma = arr.reduce((prev, curr) => prev + curr);
  return +(suma / duzina).toFixed(2);
};
console.log(prosek([19, 17, 20, 17, 28, 4, 2, 4, 5, 7, 2]));

const mile = [55, 78, 140, 121, 96, 100, 67];
const totalKilometers = (arr) => {
  return arr * 1.6;
};
console.log(totalKilometers(mile));

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
