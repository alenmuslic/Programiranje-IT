//Iz datog niza ispisati koliko elemenata je tipa string
//koliko tipa number
//koliko tipa boolean
//koliko elemenata je zapravo niz
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
//   let stringg = 0;
//   let numberr = 0;
//   let booleann = 0;
//   for (let i = 0; i <= nizz.length - 1; i++) {
//     if (typeof nizz[i] == "string") {
//       stringg++;
//     } else if (typeof nizz[i] == "number") {
//       numberr++;
//     } else if (typeof nizz[i] == "boolean") {
//       booleann++;
//     }
//   }
//   let duzina = nizz.length;
//   console.log(
//     "Ima " +
//       stringg +
//       " " +
//       "stringa," +
//       numberr +
//       " " +
//       "numbera," +
//       " " +
//       booleann +
//       " " +
//       "boolean elemenata."
//   );
//   console.log("Niz ima " + duzina + " " + "elemenata.");

//novi zapis for petlje kojoi se odnosi na sve terirajuce objekte
// function types(niz) {
//   for (let i of nizz) console.log(i);
// }
// let numbeerTipa=0
// let stringTipa=0
// let booleanTipa=0
// let nizTipa=0
// let numberTipa=0
// for (item of nizz){
//     if (typeof item === "string"){
//         stringTipa++;
//     }
//     else if (typeof item === "number"){
//         numberTipa++;
//     }
//     else if (typeof item ==="boolean"){
//         booleanTipa++;
//     }
//     if (item instanceof Array){
//         nizTipa++;
//     }
//     let duzina = nizz.length;
//     console.log(
//       "Ima " +
//         stringg +
//         " " +
//         "stringa," +
//         numberr +
//         " " +
//         "numbera," +
//         " " +
//         booleann +
//         " " +
//         "boolean elemenata."
//     );
//     console.log("Niz ima " + duzina + " " + "elemenata.");
