// // KONDICIJONALI //
// if (uslov1) {
//   //kod za izvrsavanje u slucaju ispunjenju prvog uslova
// } else if (uslov2) {
//kod za izvrsavanje u slucaju ispunjenje drugog uslova
// } else {
//   //kod za izvrsavanje u slucaju ne zadovoljavanja svih ostalih uslova
// }

// //Ako je broj godina unet od strane korisnika >= 18,neka se ispise poruka "punoletni ste" u suprotnom "maloletni ste "

// const godine = Number(+prompt("Hatidza je NPC:"));
// // if (godine >= 18) {
// //   console.log("punoletni  ste");
// // } else if (godine < 0) {
// //   console.log("Broj godina ne moze biti negativan");
// // } else if (godine < 18) {
// //   console.log("maloletni ste");
// // } else {
// //   console.log("Niste uneli broj godina");
// // }

// if (godine < 12) {
//   console.log("Vi ste decijeg doba");
// } else if (godine >= 12 && godine < 18) {
//   console.log("Vi ste maloletni");
// } else if (godine >= 18 && godine < 40) {
//   console.log("Vi ste punoletni");
// } else if (godine >= 40) {
//   console.log("Vi ste zrela osoba");
// } else {
//   console.log("Niste uneli broj");
// }

// SWITCH naredba
// Sintaksa:
// switch (izraz) {
//     case x:
//     //Blok kada koji se izbrsava u slucaju da je izraz =x
//     break;
//     case y:
//     //Blok koda kji se izvrsava u slucaju da je izraz=y
//     break;
//     case z:
//     //Blok koda kji se izvrsava u slucaju da je izraz=y
//     break;
//     default:
//         //Blok koda koji se izrsava  skucaju da izraz nije jedna ni  x, ni y, ni z
const broj = +prompt("Reci sta hoces:");
switch (broj) {
  case 12:
    console.log("korisnik je uneo broj 12");
    break;
  case 13:
    console.log("korisnik je uneo broj 13");
    break;
  case 14:
    console.log("korisnik je uneo broj 14");
    break;
  case 15:
    console.log("korisnik je uneo broj 15");
    break;
  default:
    console.log("Enver reko ne moze");
}
