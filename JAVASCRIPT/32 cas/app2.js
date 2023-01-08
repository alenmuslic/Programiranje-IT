//sortiranje nizova

const voce = ["jagoda", "banana", "keuska", "ananas", "jabuka"];
voce.sort();
console.log(voce);

//Reverse metoda sortira niz obrnuto redoslednom
voce.reverse();
console.log(voce);

let brojevi = [2, 1, 4, 3, 5, 4, 7, 6];
brojevi.sort();
console.log(brojevi);
brojevi.reverse();
console.log(brojevi);

//sprt metoda se ispavno vrsi sa brojevima
//Za resavanje datog problrma se koristi callback funkcije unutar sort metoda

//Funkcija koja se salje kao argument unutr neke drugr funkcije se zove callback fuckcija

// Funkcija za poredjenje 2 broja
function poredjaj(a, b) {
  return a - b;
}
brojevi.sort(poredjaj);
