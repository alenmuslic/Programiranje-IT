//13 i 14.

// Funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem:
// 1. function keyword
// 2. arrow function sintakse.

function zbirDvaBroja() {
  const zbir = 3 + 5;
  return zbir;
}
console.log(zbirDvaBroja());

function kvadratDvaBroja(broj1, broj2) {
  //   const kvadriranje = broj1 ** 2 + broj2 ** 2;
  return broj1 ** 2 + broj2 ** 2;
}
console.log(kvadratDvaBroja(2, 2));

//preko function keyword naci aritmeticku sredinu

function aritmeticka(broj3 = 1, broj4 = 2, broj5 = 3) {
  return (broj3 + broj4 + broj5) / 3;
}
console.log(aritmeticka());

// Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

function broj0(a, b) {
  if (a === b) {
    return `Povrsina kvadrata je` + a * b;
  } else {
    return `Povrsina pravougaonika iznosi` + 2 * a + 2 * b;
  }
}
console.log(broj0(2, 3));

//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

//ARROW FUNKCIJE =>

// Ako Arrow funkcija ima samo jedan parametar, nije neophodno okruziti ga zagradama.
// Ako je funkcija jednostavna, tj. ako odmah vraca neki jednostavan izraz, onda sama sintaksa izgleda kraca (nije neophodno koristiti viticaste zagrade i return keyword)X`
const kvadratBroja = (a) => a ** 2;

// Napraviti arrow funkciju koja na ovnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

const unos = () => {
  const broj = +prompt("Unesite neki broj:");
  if (isNaN(broj)) {
    return `Niste uneli broj`;
  } else if (broj > 0) {
    return `Unet je pozitivan broj`;
  } else {
    return `Unet je negativan broj`;
  }
};
console.log(unos(2));
