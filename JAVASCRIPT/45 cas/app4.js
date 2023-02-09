const godine = [0.2, 0.3, 2, 1.4, -14, -4, 143, 35];
const rezultat = godine.filter(punoletstvo);
function punoletstvo(godine) {
  return Math.trunc(godine) && godine > 0;
}
console.log(rezultat);

//Math.trunc daje cele brojeve npr posaljemo 17.2321313 dobicemo 17

// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is
const numbers = [-3, 4.8, 5, 3, -3.2];

const squaresPositiveIntegers = (arr) => {
  const squares = arr
    .filter((element) => element > 0 && element % 1 === 0)
    .map((br) => br ** 2);
  return squares;
};

// Da bi neki broj bio ceo, ostatak pri deljenju tog broja sa 1 mora biti 0.
console.log(4.8 % 1);
console.log(4 % 1);
console.log(squaresPositiveIntegers(numbers));

// Postoji built-in metoda u JavaScriptu koja proverava da li je neki broj Integer (ceo):
// Number.isInteger()
