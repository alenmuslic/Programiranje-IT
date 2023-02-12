console.log("Omar " + 3);
console.log(3 + "Omar");
console.log(typeof (3 + "Omar"));
console.log(3 + "2");

let isSunny = true;

isSunny
  ? console.log("Vreme je suncano." + "Ponesite naocare ")
  : console.log("Vreme je kisovito." + "Ponesit kisobran!");

const prom1 = 2;
const prom2 = 0;
const prom3 = 0;
prom1 > 0 || prom2 > 0 || prom3 > 0
  ? console.log("Nasli smo promenljivu koja je veca od nule.")
  : console.log("Nema promenljive koja je veca od nule ili jednaka nuli.");

//Ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7  neka se prekine petlja

for (i = 1; i < 11; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

for (i = 1; i < 21; i++) {
  if (i % 2 !== 0) {
    continue;
  } else if (i % 2 === 0) {
    console.log(i);
  }
}

// Ispisati dvostruju vrednost prirodnih brojeva od 6 do 64
for (i = 6; i < 65; i++) {
  if (i % 2 === 0) {
    console.log(i ** 2);
  } else {
    continue;
  }
}
