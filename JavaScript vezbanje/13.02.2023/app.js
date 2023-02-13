const string7 = "Danas je bilo lepo vreme.";
console.log(string7.slice(0, 5));
console.log(string7.slice(-6, -1));

console.log(string7.substring(0, 5));
// substring ne dozvoljava negativne brojve
console.log(string7.substr(-6, -1));

// Substring za razliku od slice ne moze da sadrzi negativne brojeve
