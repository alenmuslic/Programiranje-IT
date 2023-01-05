// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata

const niz = ["Voli", "tidzu"];
niz.unshift("Alen");
console.log(niz);

console.log(niz.unshift("ponedeljak", "utorak"));
console.log(niz);

//shift( metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1)
//shift metoda vraca izbrisan element.Kao kod pop() metode
console.log(niz.shift());
console.log(niz);

//delete keyword za brisanje odredjenog elementa unutar niza.
console.log(niz.length);
//preko delete keyword mozem izbrisati bilo koji element iz niza ali na tj nacin ostavljamo rupe u nizu(undefind vrednost)
delete niz[0];
console.log(niz);

//concat () metoda se korsti za spajanje nizova s tim sto kao argument mozemo poslati i string ne mora iskljucivo biti niz

const muskarci = ["Mitar", "Alen", "Saban Saulic"];
const devojke = ["Hatidza", "Hadzera", "Tidza"];
const grupa = muskarci.concat(devojke, "Omar");
console.log(grupa);

// Iz naseg niza grupa napravitii dva niza muskarci i devojke s tim sto se omar ne sme nalaziti nigde

const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "Omar") {
      //   continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osobe);
    } else {
      muskarci.push(osoba);
    }
    return `Muskarci su ${muskarci} \n Devojke su${devojke}`;
  }
};

// Napraviti funkciju koja pravi novi niz koji ce sadrzati samo elemente koji su se nalazili na nepanim mestima unutrar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// [1,3,5,7,9,11,13,15]

const neparnePozicije = (niz) => {
  const neparni = [];
  for (let i = 0; i < niz.length; i += 2) {
    neparni.push(niz[i]);
  }
  return neparni;
};
console.log(neparnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

// Iz nekog niza izdvojiti sve parne brojeve

function isEven(num) {
  return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(isEven);
