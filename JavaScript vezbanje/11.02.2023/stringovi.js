// STRINGOVI //
// Stringovi su immutable vrednosti (nepromenljive).
// Sto znaci da ako hocemo neki slican string da dobijemo moramo napraviti novi

const rec = "Alen Muslic, ja sam ucenik ovo je moj  \n Alen \n Muslic  ";
console.log(rec);

// Postoje 3 metode za ekstraktovanje (uzimanje dela stringa) stringa:
// 1. slice(start, end) end nije ukljucen u opseg.
// 2. substring(start, end) razlika u odnosu na slice je da substring ne
// prihvata negativne indekse.
// 3. substr(start, length)

// Racunanje ide od 0.

const string7 = "Danas je bilo lepo vreme.";
// console.log(string7.slice(5, 24));
// console.log(string7.slice(-6, -1));

// console.log(string7.substring(0, 5));

// console.log(string7.substr(0, string7.length));
