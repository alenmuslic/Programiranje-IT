// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

//2. Zadatak
const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return this.firstName + this.lastName;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      // return `${fullname()} zivi u ulici ${radnik.adresa}`
      return (
        radnik.firstName +
        radnik.lastName +
        `zivi u ulici` +
        this.ulica +
        this.broj +
        this.grad
      );
      // vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
      //          }
      //      }
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

// 3. Zadatak
// const automobil = {
//     marka: "Audi",
//     model: "Q7",
//     boja: "Bela",
//     pogon: "quattro",
//     menjac: "Automatik",
//     km:240000,
//     vlasnik:[062321552,063930630],
//     garaza:{
//         parking:"JKP Servis",
//         vikend:"od 17 free",
//         satnaKarta: "50",
//         dnevnaKarta: "200",
//         mesecnaKarta: "2000",
//         platiZa: function(od, do) {
//
// }
//     }
// }

//1.
const objekat = {
  firstName: "Alen",
  lastName: "Muslic",
  language: "srpski",
  setLanguage: function () {
    prompt("set language:");
    return prompt;
  },
  setNickName: function () {
    let prvo = "";
    let drugo = "";
    let sastavljanje = "";
    for (let i = 0; i < 2; i++) {
      prvo += this.firstName[i];
      drugo += this.lastName[i];
    }
    sastavljanje = prvo + drugo;
    return sastavljanje;
  },
};
console.log(objekat.setNickName());
