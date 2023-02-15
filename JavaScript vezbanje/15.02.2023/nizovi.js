// // koliko tipa number,
// // koliko tipa boolean,
// // koliko elemenata je zapravo niz?
// const nizz = [
//   "jagoda",
//   25,
//   true,
//   "mandarina",
//   [1, 2, 3],
//   "ananas",
//   49,
//   694,
//   "tresnja",
// ];

// function types(niz) {
//   let stringTipa = 0;
//   let numberTipa = 0;
//   let booleanTipa = 0;
//   let nizTipa = 0;
//   for (item of niz) {
//     if (typeof item === "string") {
//       stringTipa++;
//     } else if (typeof item === "number") {
//       numberTipa++;
//     } else if (typeof item === "boolean") {
//       booleanTipa++;
//     } else if (item instanceof Array) {
//       nizTipa++;
//     }
//   }
//   return `U datom nizu su se nasla: \n ${stringTipa} stringova,
//      \n ${numberTipa} brojeva, \n ${booleanTipa} booleana,
//      \n ${nizTipa} nizova.`;
// }
// console.log(types(nizz));

// //  unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// // unshift() prikazuje novu duzinu niza.

// // shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1.
// // shift() metoda vraca izbrisani element. Kao kod pop() metode.

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const grupa = muskarci.concat(devojke, "Mehmed", "Omar", "Hamza");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.
const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  let osoba = [];
  for (let osoba of niz) {
    if (osoba === "Omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Muskarci su ${muskarci} \n
  Devojke su ${devojke}`;
};

console.log(podeliNiz(grupa));

// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]
const neparnePozicije = (niz) => {
  const neparni = [];
  for (let i = 0; i < niz.length; i = i + 2) {
    if (niz % 0 !== 0) {
      neparni.push(niz[i]);
    }
  }
  return neparni;
};
console.log(neparnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

const parnibr = (niz) => {
  const prazan = [];
  for (let broj of niz) {
    if (broj % 2 === 0) {
      prazan.push(broj);
    }
  }
  return prazan;
};
console.log(parnibr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const pozitivni = (niz) => {
  pozitivni1 = [];
  for (broj1 of niz) {
    if (broj1 < 0) {
      continue;
    } else {
      pozitivni1.push(broj1);
    }
    return pozitivni1;
  }
};
console.log(pozitivni([-1, -2, -3, 1]));

const neparniibr = (niz) => {
  const prazan = [];
  for (let broj of niz) {
    if (broj % 2 !== 0) {
      prazan.push(broj);
    }
  }
  return prazan;
};
console.log(neparniibr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// splice metoda je najmocnija alatka kod nizova u Java Scritu.
//Omogucava nam promene u nizu na zeljenoj poziciji.
//1. Mozemo dodati(koliko hocemo0 )elemenata na nekom mestu
//2.Mozemo izbrisati elemente  na nekom mestu

// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
// Napraviti funkciju koja vraca najveci element niza,
const brojevi = [-5, 6, 10, 45, 99, -44];

// I nacin

function maxEl(niz) {
  niz.sort((a, b) => b - a);
  return niz[0];
}
console.log(maxEl(brojevi));

// II nacin

console.log(Math.max.apply(null, brojevi));

// III nacin

function maxElement(niz) {
  let max = Number.NEGATIVE_INFINITY;
  for (let broj of niz) {
    if (broj > max) {
      max = broj;
    }
  }
  return max;
}

console.log(maxElement(brojevi));

// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

//1.
const funkcija = (niz) => {
  let niz2 = niz.join("h");
  return niz2;
};
console.log(funkcija([1, 2, 3, 4, 5]));

//2.
const program = (niz) => {
  let noviBroj = "";
  for (let i = 0; i < niz.length - 1; i++) {
    if (niz[i] % 2 === 0 && niz[i + 1] % 2 === 0) {
      noviBroj += niz[i] + "-";
    } else {
      noviBroj += niz[i];
    }
  }
  return noviBroj;
};
console.log(program("0659168435"));
