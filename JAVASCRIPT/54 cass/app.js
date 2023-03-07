function devide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Deljenje nulom nij moguce.");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Ovo je bila funkcija koja deli 2 broja");
  }
}
console.log(devide(1, 0));
console.log(devide(10, 5));

//Promise je Js objekat koji predstavlja mesto za rezltate asihrone funkcije sve dok traje izvrsavanje asihrone.

// const alen = new Promise((resolve, reject) => {
//   const response = 200;
//   if (response >= 200 && response < 300) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// alen
//   .then(() => console.log("Dobio sam cizburger"))
//   .catch(() => console.log("Nisam cizburger"))
//   .finally(() => console.log("Obecanje je izvrseno"));

// const alen = new Promise((resolve, reject) => {
//   const response = 200;
//   if (response >= 200 && response < 300) {
//     resolve([1, 2, 3]);
//   } else {
//     reject([31, 3, 5]);
//   }
// });
// alen
//   .then((a) => console.log(a))
//   .catch((b) => console.log(b))
//   .finally(() => console.log("Obecanje je izvrseno"));
