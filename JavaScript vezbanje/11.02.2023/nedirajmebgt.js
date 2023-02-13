let recenica = "Danas jE bilo lEpo vreme";
// let recenica2 = recenica.replace("Danas", "Juce");
// console.log(recenica2);
// recenica2 = recenica.replace("s", "t");
// console.log(recenica2);
// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
// recenica2 = recenica.replace(/e/g, "t");
// console.log(recenica2);
// 1. i (insensitive)
// recenica2 = recenica.replace(/e/i, "A");
// console.log(recenica2);
recenica2 = recenica.replace(/b/gi, "A");
console.log(recenica2);
