// callback funkcija //
function glavnaFunkcija(func) {
  console.log("Radnja unutar glavne funkcije");
  func((par1 = 2), (par2 = 5));
  console.log("Kraj glavne funkcije.");
}

function callback(par1, par2) {
  console.log(par1 ** par2);
}
glavnaFunkcija(callback);

//Cakback funkcija oredstavlja funkciju koju saljemo kao argument neke dtuge funkcije,

// Napraviti glavnu funkciju unutar koje ce se desiti radnja ispis
