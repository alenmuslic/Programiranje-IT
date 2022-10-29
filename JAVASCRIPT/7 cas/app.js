// while petlja nam mogucava iteraciju kroz neki objekat nekoliko puta uz potencijalno odredjene uslove
// Kod while petlje je neophodno na kraju koda definisati povecane iteratira (Kako ne bismo dobili beskonacnu petlju)

// while (uslov) {
// blok koda za izvravanje
// definisati povecanje iteratora
// }

// Ispisati sve brojeve od 1 do 10 koji su parni
// let i = 0;
// while (i < 11) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//     i++;
// }

// // Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis kvadrata brojva od 1 do tog unetog broja
// let i = 1;
// let a = +prompt("Unesite a:");

// while (i <= a) {
//   console.log(i * i);
//   i++;
// }

// Na osnovu toga koji je broj manji, iteracija se vrsi od njega na veceg broja.Ispisuje se brojevi od manjem ka vecem
// let broj1 = +prompt("Unesite broj1:");
// let broj2 = +prompt("Unesite broj2:");
// if (isNaN(broj1) || broj2) {
//   console.log("Morate uneti brojeve");
// }
// if (broj1 < broj2) {
//   while (broj1 <= broj2) {
//     console.log(broj1);
//     broj1++;
//   }
// } else if (broj1 > broj2) {
//   while (broj1 >= broj2) {
//     console.log(broj2);
//     broj2++;
//   }
// } else if ((broj1 = broj2)) {
//   console.log("Uneti brojevi moraju biti razliciti ");
// }

// DO WHILE petlja predstavlja poseban slusaj while petlje, gde se prvo izvrsava kod, pa tek onda proverava uslova

// do {
//blok koda izvrsavanja
// } while (uslov);

//iSPISATI SVE BROJEVE OD 1 DO 5
let broj1 = 1;
do {
  console.log(broj1);
  broj1++;
} while (broj1 < 6);
