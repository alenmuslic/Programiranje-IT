// Niz predstavlja strukturu oidatka koja moze vise od jedne vrednosti

//Nizovi u JavaScript su heterogeni (mogu sadrzato elemente razlicitih tipova)

const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);

//Mozemo prvo kreirati  prazan niz pa nakon toa dodavati rucno elemente

const automobil = [];
automobil[0] = "audi";
console.log(automobil);
automobil[1] = "polo";
console.log(automobil);

automobil[5] = "hatidza";
console.log(automobil);
automobil[3] = "mahmutovic";
console.log(automobil);
automobil[100] = "alen";
console.log(automobil);
automobil[5] = "a";
console.log(automobil);

//niz mozemo definisati preko new keyword
const niz2 = new Array("Alen", "Hasan", "Hatidza", "Omar");
console.log(niz2);

//Radi jednostavnosti citljivosti koda i brzine izvrsavanja je olje koristiti [] nego new

const niz3 = [40];
console.log(niz3);
//new Array nam uzima 40 praznih striingova
const niz4 = new Array(40);
console.log(niz4);

//Pristupanje elementima se vrsi preko indexa"
console.log(automobil[1]);

//postoje 2 nacina za proveravanje
console.log(typeof automobil);

//1.Array.isArray(PotencijalnoNiz)
console.log(Array.isArray("neki string"));

// 2.isstanceof Array
console.log(25 instanceof Array);

console.log(automobil.length);

//  za dodavsnje elemenata na kraju niza koristi se ush metoda

const dani = ["ponedelja", "utorak", "sreda", "cetvrtak", "petak", "subota"];
dani.push("nedelja");
console.log(dani);
//push metoda nam omogucava dodavanje vise od jednog lemeta na kraju niza
//danipush(...)

dani[dani.length] = "subota";
console.log(dani);

// za pretvaranje niza u strig mozemo iskrostiti za 2 metode
const daniS = dani.toString();
console.log(daniS);

const noviNiz = daniS.split(",");
console.log(noviNiz);

// 2.
const daniS2 = dani.join();
console.log(daniS2);
console.log(typeof daniS);

//Dobijanje strifa i stavljanje nekog znaka izmednju elementa niza koji smo pretvorili u string

// niz.pop( vraca vrednost izbrisanog elementa])
const subota = dani.pop();
console.log(subota);
console.log(dani);
