//fibonacijev nizu cije vrednost ne prelaze 4 miliona pronaci sumu parnih elemenata
//Fibonacijev niz je sastavljen na nacim da je element jednak zbiru prethodna 2 elementa
// program to generate fibonacci series up to n terms
const number = parseInt(prompt("Enter a positive number: "));
let n1 = 0,
  n2 = 1,
  nextTerm;
console.log("Fibonacci Series:");
console.log(n1);
console.log(n2);
nextTerm = n1 + n2;
while (nextTerm <= number) {
  console.log(nextTerm);
  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}

const isPolindrom = (broj) => {
  const strBroja = broj.toString();
  let newStrBroj = "";
  for (let i = strBroja.length - 1; i >= 0; i--) {
    newStrBroj += strBroj[i];
  }
  if (strBroj === newStrBroj) {
    return true;
  } else {
    false;
  }
};
console.log(isPolindrom);
