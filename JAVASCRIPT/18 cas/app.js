// split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjena
//Ako se kod split metode izostavi element dobicemo niz od jednog elementa
const recenica = "Hatidza ,queen of ,frogs";
const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split(",");
console.log(niz2);

const niz3 = recenica.split("*");
console.log(niz3);

//Napraviti niz od stringa tako da se elementi niza prave do svake reci... decembar...
// u sustini rec decembar ne sme biti ni jedan deo niza

const recenica4 =
  "decembar je poslednji mesec u godini.U decembar pocinje zima,decembat je najhladniji mesec u goidini";
const nizz = recenica4.split("decembar");
console.log(nizz);



//  search metode :
// indexOf() metoda nam vraca poziciju gde nam zapravo pocinje poslati atgument (1 uli vise) kada se rai o neko, strigu

// const pozicija= recenica2.indexOf(
    
    
//     )

const funkcija= function (rec){
    const recenica2= "diamfoasifjasofisaj ko saoidandaso osvaja ko osvaja"
const pozicija = recenica2.indexOf("Ko osvaja")
const pozicija2 = recenica2.lastIndexOf("Ko osvaja)


} 
      