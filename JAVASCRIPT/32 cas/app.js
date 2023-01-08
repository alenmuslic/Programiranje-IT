// splice metoda je najmocnija alatka kod nizova u Java Scritu.
//Omogucava nam promene u nizu na zeljenoj poziciji.
//1. Mozemo dodati(koliko hocemo0 )elemenata na nekom mestu
//2.Mozemo izbrisati elemente  na nekom mestu

const niz = [
  "Dzenan",
  "Bakir",
  "Amer",
  "Aladin",
  "Haris",
  "Merisa", //5
  "Hatidza", //6
  "Alen",
  "Emin",
  "Hamed",
  "Miona", //10
];

//Splice metoda uzima minimum 2 argumenta
//brisanje
// niz.splice(2, 6);cons
// ole.log(niz);

//Dodavanje elementa u niz na blo kojem mestu
// niz.splice(2,0,"Tarik")
// console.log(niz)

//Splice metoda nam vraca niz sa izbrisanim elementima

//SPLICE NE OSTAVLJA RUPE U NIZU U ODNOSU NA DELETE METODE

//Iz niza izbrisati sve devojke
//Iz niza izbrisati sve muskarce
//Na petom elementu dodati "Tarik",a na kraju niza dodati "omar"

//3.
// niz.splice(4, 0, "Tarik");
// niz.splice(niz.length, 0, "Omar");
// console.log();

// //1.
// niz.splice(5, 2);
// niz.splice(8, 1);
// console.log(niz);

//2.
// niz.splice(0, 5);
// niz.splice(2, 3);
// console.log(niz);

//SLICE metoda nam vraca deo niza
const skraceniNiz = niz.slice(3, 5);
console.log(skraceniNiz);

//Izostavljanjem drugog argumenta kod slice metode se uzima ostatak niza
