// OPERATORI U JAVASCRIPTU
//PODELICEMO OPERTORE u 6 grupa:

// 1.Aritmeticki operatori (Atimetic operators)
// 2. Operatori dodele vrednosti (Assigment operators)
// 3. String operator ( String operators)
// 4. Operatori poredjenja (Comparison operators)
// 5. Logicki operatori (Logical operators)
// 6. Tip operatora (Type operators)

// 1.Aritmeticki operatori (Atimetic operators)
// 1.1 + operator
console.log(4 + 5);
// 1.2 - operator
console.log(4 - 5);
// 1.3 * operator moneznje
console.log(4 * 5);
// 1.4 / operator deljenja
console.log(24 / 7);
// 1.5 ** operator stepenovanja
console.log(2 ** 3.14);
// 1.6 % operator Modulo (ostatak pri deljenj dva broja)
console.log(23 % 3);

//Uslov za parnost
// i % 2 === 0
// i % 2 === 1
// 1.7 ++ ( Povecanja vrednosti za 1)
let a = 6;
a++;
console.log(a);

let b = 6;
++b;
console.log(++b);

// 1.8   -- Derement (Smanjuje vrednost za jedan)
let f = 2;
// f--;
console.log(--f);

let w = 65;
console.log(w);
// 2.Operator dodele vrednosti (Assigment operators);

// 2.1 = Dodeljivanje vrednosti nekoj promenjivoj

// 2.2 += Dodavanje odredjene vrednosti na postojecu promenjivu
w += 5; // w=w+5
console.log(w);

// 2.3 -+ Oduzimanje odredjene vrednosti na postojecu promenjivu

z -= 3;
console.log(z);

//2.4 *= Mnozenje odredjene na potsojecu vrednost

z *= 2;
console.log(z);

// 2.5 /= Deljenje odredjene na postojeu vrednost
z /= 2;
console.log(z);

// 2.6 %= modul odredjene vrednosti na postojecu promenjivu

x %= 2;
x = 6 % 2;
console.log(x);

// 2.7 **=  Stepenovanje odredjene vrednost  na postojecu promenjivu

y **= 2;
console.log(y);

// 3. string operatori

// Jedan od nacina za spajanje stringova je koriscenjem + operatora.

let prviDeo = "Danas je Omar";
let drugiDeo = "doneo pizzu";
// console.log (Boolean  prviDeo +"" ""+ drugiDeo );

// Neki slucajevi za sabiranje
console.log("Omar " + 3);
console.log(3 + "Omar");
console.log(typeof (3 + "Omar"));
console.log(3 + "2");

//4.1
// let a=5;
// let b=6;
let c = 7;

console.log(a == c);
console.log(a == b);

// 4.2 Provverava jdnakost tipa i jefkpst
let d = "5";
console.log(a == b);
console.log(a === d); // pritom proveava i tip

//  4.3 Proverava razlicitost vrednosti
console.log(b != c);

//4.4 !== ispituje da li je razlicita vrednost ili razlicit tip
console.log(a !== d);

// 4.5  > da i je druga vrednost veca od druge

console.log(a > b);

// 4.6  > da i je druga vrednost veca od druge
console.log(a < b);

// 4.7  >=  da li je prva vrednost veca ili jednaka drugoj
console.log(a >= b);

// 4.8  >=  da li je prva manja  veca ili jednaka drugoj
console.log(a <= b);

//4.9 ? terarni operator
//uslov ?  (radnja koja se izvrsava ako je uslov zadovoljen )
// : // (radnja koja se izvrsava ako je uslov zadovoljen )
//

let isSunny = false;

isSunny
  ? console.log("Vreme je suncano." + "Ponesite naocare ")
  : console.log("Vreme je kisovito." + "Ponesit kisobran!");

// 5 logicki operatori
// && and (i) zahteva zadovoljavanje svih uslova

let prom1 = 4;
let prom2 = 3;
let prom3 = -6;

prom1 > 0 && prom2 > 0 && prom3 > 0
  ? console.log("Sve tri promenjive su pozitivni brojevi")
  : console.log("Nisu Sve tri promenjive pozitivni brojevi");

// 5.2 || or (ili) zahteva zadovoljenje  bar jednog od ponudjenih uslova

prom1 > 0 || prom2 > 0 || prom3 > 0
  ? console.log("Nasli smo bar jednu promenivu od nule")
  : console.log(" Sve tri su promenjive su manji od nule ");

// 5.3 ! not (not) (okrece vrednost => true u false i obrnuto)
console.log(!Boolean(prviDeo + "" + drugiDeo));
// 6 tip ioeratota Type operator

// 6.1 typeof se koristi za ispitivanje tioa idredjene promenjive

isSunny = false;
console.log(typeof isSunny);

// 6.2 instanceof - za proveru da li je neka promenjiva instanca objekta npr

const obj = {
  ime: "Omar",
  prezime: "Semsovic",
};

console.log(obj instanceof Object);
