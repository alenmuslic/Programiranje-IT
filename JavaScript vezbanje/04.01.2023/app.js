// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

const duzina = +prompt("Unesite duzinu terena");
const sirina = +prompt("Unesite sirinu terena");
const rastojanje = +prompt("Unesite rastojanje od ivice terena i ograde");

if (isNaN(duzina) || sirina || rastojanje) {
  console.log("Unete vrednosti moraju biti brojevi");
} else if (duzina < 90 && duzina > 120) {
  console.log("Unete duzine moraju biti izmedju 90m u 120m");
} else if (sirina < 45 && sirina > 90) {
  console.log("Sirina mora biti izmedju 45m i 90m");
} else if (rastojanje < 2 || rastojanje > 10) {
  console.log("Rastojanje terena mora biti izmedju 2m i 10m.");
}
const obimTerena = 2 * duzina + 2 * sirina;
const obimOgrade = obimTerena + 8 * rastojanje;
console.log("Potrebno je " + obimOgrade + "m za ogradjivanje terena.");

//Prebrojati koliko ima slova u unetom stringu, tako što prebrojavamo razmake. Npr. za string 'Joca voli sladoled', dobija se rezultat 3. Podrazumeva se da u stringu nema vodećih, pratećih ili višestrukih razmaka.
let string = "Alen voli Tidzu";
let reci = string.split("");
let duzinaReci = reci.length;
console.log(duzinaReci);

//Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5
const recenica = prompt("Unesite recenicu ");
let brojac = 0;
let i = 0;
while (i < recenica.length) {
  if (recenica[i] === "m" || recenica[i] === "M") {
    brojac++;
  }
  i++;
}
console.log(brojac);

//Prebrojati koliko ima znakova koji su cifre u unetom stringu.

let brojac2 = 0;
const recenica2 = prompt("Unesite neki string: ");
for (let i = 0; i < recenica2.length; i++) {
  if (isNaN(recenica2[i])) {
    continue;
  } else {
    brojac2++;
  }
}
console.log(brojac2);
