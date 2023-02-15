// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let element;
let brojPojavljivanja = 1;
let brojac = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      brojac++;
      if (brojac > brojPojavljivanja) {
        brojPojavljivanja = brojac;
        element = arr1[i];
      }
    }
  }
  brojac = 0;
}
console.log(`${element} se pojavljuje ${brojPojavljivanja} puta.`);

//filter map reduce
