// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

//1 string
//2 nizova koji ce da sadrze objekte
const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (povecanje) {
  if (this.trenutnaBrzina + povecanje > this.maksimalnaBrzina) {
    return `Nije moguce voziti preko maksimalne brzine`;
  } else {
    this.trenutnaBrzina += povecanje;
    return { trenutnaBrzina: this.trenutnaBrzina };
  }
};
myCar.povecanjeBrzine(50);
console.log(myCar);
console.log(myCar.povecanjeBrzine(200));

myCar.smanjenjeBrzine = function (minus) {
  if (this.trenutnaBrzina - minus < 0) {
    return `Ne mozete smanjiti brzinu za tu vrednost`;
  } else {
    return (this.trenutnaBrzina -= minus);
  }
};
console.log(myCar.smanjenjeBrzine(40));
myCar.smanjenjeBrzine(25);
console.log(myCar);
