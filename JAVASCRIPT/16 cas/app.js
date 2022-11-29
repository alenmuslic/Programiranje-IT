// replace () metoda vrsi zamenu nekoliko karaktera datog srinfa.Ima 2 arguenta.
//Oi defaultu replace () metoda menja samo prvo probnalazenje datih stringa

const recenica = "Danas smo podelili sertifikate za HTML,CSS i JavaScript.";

let recenica2 = recenica.replace("s", "a");
console.log(recenica2);

// Za orimeni svih ornalazenja datog stringa cemo koristiti Regular Expressions
recenica2 = recenica.replace(/s/gi, "t");
console.log(recenica2);

// Napraviti funkciju koja kod striga koji predstavlja parametar funkcije  ISPISUJE sledece:
//Alp dati string ima cec duzimu 9:
//Pravi novi string koji ce biti duzine od pola do kraja originalngstringa.
//Nakon toga novom stringu menjamo sva mala slova "a" sa "B" i funkcije ce vratiti novi string koji
//je sastavljem od "Ovo je nedobijena recenica" i posledmke, izmedju isecla.
//Ako string ima duzinu <=9
//Funkcija trrb vrtiti poruku:
//argument + {mkeme dizome} + "neddovoljno za dalje ispitivanje "
