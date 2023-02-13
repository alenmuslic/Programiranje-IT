// 1. charAt(index) - vraca nam karakter nekog stringa za poslatim indeksom.
// 2. charCodeAt(index) - vraca nam kod karaktera nekog stringa za poslatim indeksom.
// 3. string[index] - vrlo slicno charAt metodi (sa jednom razlikom)

const novaRecenica = "Spava mi se.";
const char1 = novaRecenica.charAt(3);
// const char11 = novaRecenica.charAt(46); // rezultat ce biti ""
console.log(char1);

const char2 = novaRecenica.charCodeAt(3);
console.log(char2);
const char3 = novaRecenica[3];
const char33 = novaRecenica[32]; //rezultat ce biti undefined
console.log(char3);

console.log(char11);
console.log(char33);
