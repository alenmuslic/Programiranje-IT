// Domaci:
// 1.
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// 2.
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

//1.
function zbir(num1, num2) {
  suma = 0;
  for (i = num1; i <= num2; i++) {
    let hatidza = i.toString();
    if (hatidza.includes("5")) continue;
    else suma++;
  }
  return suma;
}
console.log(zbir(4, 17));

//2.
function small(niz, izbor) {
  min = niz[0];
  if (izbor == "index") return 0;
  else if (izbor == "value") {
    for (let num of niz) {
      if (num < min) min = num;
    }
    return min;
  } else return `pogresan unos`;
}
console.log(small([5, 2, 8, -1], "value"));
