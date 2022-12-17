// number metode

//toString - Ova metoda pretvara bilo koji tip podatka u string

let x = 22;
console.log(x);
console.log(typeof x);
let y = x.toString();
console.log(y);
console.log(typeof y);
console.log(y + x);

// toExponaential()- nam vraca string broja, zaokruzi na onoliko decimala,koliki je argument metode.
let z = 55.34324;
let w = z.toExponential(2);
console.log(w);

// toFixed()- vraca string  broja,koji ce biti zaokruzen na onoliko decimala koliki je zapravo arument.
r = 12.1234;
q = r.toFixed(3);
console.log(q);
console.log(typeof q);

// toPrecision() metoda vraca string broja, sa onoliko cifara koliki je argument funkcije

a = 12.1234;
b = a.toPrecision(2);
console.log(b);
console.log(typeof b);

//Napraviti funkciju koja prima jedan argument(broj) i vraca poruku da li je dati argument palindrom

// function isPalindrome(num) {
//   const numStr = num.toString();
//   if (numStr === numStr.split("").reverse().join("")) {
//     return `${num} is a palindrome`;
//   } else {
//     return `${num} is not a palindrome`;
//   }
// }
function isPalindrome(broj) {
  const stringBroja = broj.toString();
  const obrnutiBroj = "";
  for (let i = stringBroja.length - 1; i >= 0; i++) {
    obrnutiBroj += stringBroja[i];
  }
  if (stringBroja === obrnutiBroj) {
    return `Dati broj jeste polindrom`;
  } else {
    `Dati broj nije polindrom `;
  }
}
console.log(isPalindrome(123));
console.log(isPalindrome(12321));

//Napraviti funkciu koja ocekuje trocifren broj a vraca dvocifren broj

// function dvocifreniBroj(broj) {
//   var trocifreniBroj = broj.toString();
//   if (trocifreniBroj.length === 3) {
//     return trocifreniBroj.substring(1);
//   } else {
//     return broj;
//   }
//
// console.log(dvocifreniBroj(123));
// console.log(dvocifreniBroj(45));
// console.log(dvocifreniBroj(999));

function dvocifreniBroj(broj) {
  const duzina = broj.toString().length;
  const stringBroja = broj.toString();
  if (duzina !== 3) {
    return `Argument mora imati 3 cifre`;
  } else {
    const noviString = stringBroja.replace(stringBroja[1], "");
    return +noviString;
  }
}
console.log(dvocifreniBroj(1211));
console.log(dvocifreniBroj(21));
console.log(dvocifreniBroj(212));

//DOMACI
// nAPRAVITI FUNKCIJU KOJA OCEKUJE CETBOROCIFRENI BROJ A VACA BROJ KOJEM SU ZAMENJENE PRVA I POSLEDNJA CIFRA I DRUGA I TRECA CIFRA
//4752
//5247

//Global JavaScript medote mogu biti primenjene na bil koji tip podatka
//Predtavicemo 4 najcesce kriscene metode sa brojevima

// 1.Number ()- vrac broj konvertovan iz agumenta
console.log(Number("23"));
