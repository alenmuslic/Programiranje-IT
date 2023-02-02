const amer = {
  name: "Amer",
  prezime: "Honic",
  age: 19,
  fullName: function () {
    return `${this.name} ${this.prezime}`;
  },
};
const emin = {
  firstName: "Emin",
  lastName: "Zukanovic",
  age: 19,
};

//PozivANJE NEKE FUNKCIJE ZA ODREDJENI OBJEKAT SE MOZE IZVRSII POMOCU FUNKCIJE:
//1.Call()
//2.apply()
//3.bid()

//Prvo treba pristupiti funkciji,pa onda objasniti na kojem se objektu treba primeniti

console.log(amer.fullName.call(emin));

//PRIMER
const restoran1 = {
  hrana: "spagete",
  gosti: "zadovoljni",
  lokacija: "Stevana Nemanje,64",
};

const restoran2 = {
  hrana: "burek",
  gosti: "zgadjeni",
  lokacija: "Stanice spasojevic, 62",
};

const poruka = (mesto, drzava) => {
  return `Vecerasnji specijalitet u nasem restoranu je bio ${this.hrana}.Nasi gosti su ${this.gosti},te sreni zbog toga.Nalazimo se u ulici ${this.lokacija},u tom mestu ${mesto},${drzava}`;
};
//call metoda za prvi argument ima objekat na koji se primenjuje osstali argumenti su argumenti metode koja se izvrsava

console.log(poruka.call(restoran1, "Novi Pazar", "Srbija"));

//apply() metoda za prvi argument ima objekat na koji se primenjuje,drugi argument je niz gde smestamo argumente metide koja se izvrsava

console.log(poruka.apply(restoran2, ["Sarajevo", "Bosna i Hercegovina"]));

//blinf() zahteva pethodno definisanje promenjive za odredjeni objekat pa onda povezivvanje funkcije sa eventualnim argumentom
