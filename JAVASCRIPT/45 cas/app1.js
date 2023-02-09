// // Jos jedan nacin pravljenja objekta:

// const objectFunctions = {
//   incrementScore: function () {
//     this.score += 8;
//   },
// };

// function createUser(firstName, lastName, score) {
//   const newUser = Object.create(objectFunctions);
//   newUser.firstName = firstName;
//   newUser.lastName = lastName;
//   newUser.score = score;
//   return newUser;
// }

// const tarik = createUser("Tarik", "Ibrovic", 16);
// console.log(tarik);

// tarik.incrementScore();
// console.log(tarik);

const objekatNeki = {
  dodatniBroj: function () {
    this.godine += 1;
  },
};
function napraviLika(ime, prezime, godine) {
  const noviLik = Object.create(objekatNeki);
  noviLik.ime = ime;
  noviLik.prezime = prezime;
  noviLik.godine = godine;
  return noviLik;
}
const alen = napraviLika("Alen", "Muslic", 17);
console.log(alen);
alen.dodatniBroj();
console.log(alen);
