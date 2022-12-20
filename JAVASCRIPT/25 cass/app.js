//Napraviti funkciju koja o  cekuje cetvorocfren broj a vraca broj kojem su zamenjena prva i treca cifra kao i druga i cetvrta   cifra

function menjanjeCifre(broj) {
  const strBroja = broj.toString();
  if (strBroja.length !== 4 || isNaN(strBroja)) {
    return `Dati argument mora biti cetvorocifren broj`;
  } else {
    const prviDeo = strBroja.slice(0, 2);
    const drugiDeo = strBroja.slice(2);
    const noviBroj = drugiDeo.concat(prviDeo);
    return noviBroj;
  }
}
console.log(menjanjeCifre(4725));
console.log(menjanjeCifre(1234));
console.log(menjanjeCifre(24));

// 2-METODA
// parseInt()- analizira nam ceo broj i vraca ako je moguce
//parseFloat()

// Number PROPORTIES
// SLEDECIM KONSTANTAMA MOZEMO PRISTUPITI JEDINO POMOCU NUMBER
//Number.Property

//Napomena
// Konstamte ne mogu biti primenjene na varijable
// 1.Max_Vakue- Vraca najveci broj u JavaScript
const najveci = Number.MAX_VALUE;
console.log(najveci);

//2. MIN_VALUE vraca najmanji broj u JS
const najmanji = Number.MIN_VALUE;
console.log(najmanji);

// 3. NEGATIVE_INFINITY - Vraca Infinity
const beck = Number.NEGATIVE_INFINITY;
console.log(beck);
// 4. POSITIVE_INFINITY - Vraca Infinity
const beSK = Number.POSITIVE_INFINITY;
console.log(beSK);

// 5. NaN- vraca NaN
const notANumber = Number.NaN;
console.log(notANumber);

// Napisati program koji od uneta tri broja vraca najveci
const najveciBroj = function (prvi, drugi, treci) {
  let max;
  if (prvi >= drugi && prvi >= treci) {
    max = prvi;
  } else if (drugi >= prvi && drugi >= treci) {
    max = drugi;
  } else {
    max = treci;
  }
  return `Najveci broj je ${max}`;
};

console.log(najveciBroj(1, 2, 3));
console.log(najveciBroj(-1, -2, -3));
