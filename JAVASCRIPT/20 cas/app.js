function kolikoMalih(recenica) {
  let brojac = 0;
  for (let i = 0; i < recenica.lenght; i++) {
    if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}
console.log(kolikoMalih("da li BROJI razmake"));

// 2.   Ispitati da li u uneto stringu ima vise malih ili velikih slova.Slova koja se koriste u stringu pripadaju iskljucivo engleskog abecedi

function kojihVise(recenica) {
  let brojacMalih = 0;
  let brojacVelikih = 0;
  for (let i = 0; i < recenica.lenght; i++) {
    if (recenica[i] !== recenica[i].toUpperCase()) {
      brojacMalih++;
    } else if (recenica[i] !== recenica[i].toLowerCase()) {
      brojacVelikih++;
    }
  }
  if (brojacMalih > brojacVelikih) {
    return `Malih ima ${brojacMalih} i njih je vise`;
  } else if (brojacMalih < brojacVelikih) {
    return `Velikih ima ${brojacVelikih}i njih je vise`;
  } else {
    return `u poslatom stringu ima jednak broj velikih i malih slova`;
  }
}

console.log(kojihVise("koliko KOJIH"));
console.log(kojihVise("koliko KOJIH IMA VISE"));
console.log(kojihVise("koliko jos tri KOJIH IMA VISE"));

//  3.
const toLower = (recenica) => {
  let novaRecenica = "";
  for (let i = 0; i < recenica.lenght; i++) {
    novarecenica += revenica[i].toLowerCase();
  }
  return novaRecenica;
};
console.log(toLower("ISPISI sva MaLa SLOVAAA"));

// 4. Pronaci poziciju poslednjeg razmaka u stringu. NPR za neto Alen nema devojku, rezultt je
const lastSpace = (string) => {
  const index = string.lastIndexOf(" ");
  return `poslednji razak se nalazi na ${index} mestu`;
};
console.log("STA AKO IMA VISE RAZMAKA");
console.log("STA");

// 5.Ispisati uzinu prve reci unetog stringa

const duzinaPrveReci = function (recenica) {
  const index = recenica.search(" ");
  return `prva rec ima ${index}karaktera`;
};
console.log(duzinaPrveReci("prva"));
