//Ako je broj godina unet od strane korisnika >= 18,neka se ispise poruka "punoletni ste" u suprotnom "maloletni ste "

const godine = +prompt("Unesite broj godina");
if (godine >= 18) {
  console.log("Punoletni ste");
} else if (godine < 18) {
  console.log("Maloletni ste");
} else if (godine < 0) {
  console.log("Broj godina ne moze biti negativan");
}

//Napisati program koji ispisuje DECIJEG STE DOBA(GODINE>12),VI STE MALOLETNI(GODINE>12 && GODINE<18),PUNOLETNI STE (GODINE>=18 && GODINE<40), VI STE ZRELA OSOBA (GODINE<=40)

const godine1 = prompt("Unesite broj godina");
if (isNaN(godine1)) {
  console.log("Morate da unesete broj");
} else if (godine1 < 12) {
  console.log("Decijeg ste doba");
} else if (godine1 > 12 && godine1 < 18) {
  console.log("Vi ste maloletni");
} else if (godine1 >= 18 && godine1 < 40) {
  console.log("Vi ste punoletni");
} else if (godine1 >= 40) {
  console.log("Vi ste zrela osoba");
} else {
  console.log("brate ti nisi normalan ");
}

// const broj = +prompt("Reci sta hoces:");
// switch (broj) {
//   case 12:
//     console.log("korisnik je uneo broj 12");
//     break;
//   case 13:
//     console.log("korisnik je uneo broj 13");
//     break;
//   case 14:
//     console.log("korisnik je uneo broj 14");
//     break;
//   case 15:
//     console.log("korisnik je uneo broj 15");
//     break;
//   default:
//     console.log("Enver reko ne moze");
// }

//NAPRAVITI PROMOCIJU SA 200 DINARA KREDITA

const broj = +prompt("Stanje na racunu:");
if (isNaN(broj)) {
  console.log("Morate uneti broj");
} else if (broj > 0 && broj < 50) {
  console.log("Stanje na racunu nije dovoljno za bilo kakvu promociju");
} else if (broj >= 50 && broj < 100) {
  console.log("Promocija 1.Internet (1gb na dan),(100mb 50din)   ");
} else if (broj > 100 && broj < 200) {
  console.log(
    "Promocija 1.Internet(2gb 10h),(1GB+DM) 2.MIX (200minuta,200sms)  "
  );
} else if (broj > 200) {
  console.log("Imate 200 dinara na racunu!!!");
}

//Ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7  neka se prekine petlja
for (let i = 1; i < 10; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

//ISPISSTI PARNE BROJEVE OD 1 DO 20
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Na osnovu toga koji je broj manji, iteracija se vrsi od njega na veceg broja.Ispisuje se brojevi od manjem ka vecem
let broj1 = +prompt("Unesite broj1:");
let broj2 = +prompt("Unesite broj2:");
if (isNaN(broj1) || broj2) {
  console.log("Morate uneti brojeve");
}
if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj1 > broj2) {
  while (broj1 >= broj2) {
    console.log(broj2);
    broj2++;
  }
} else if ((broj1 = broj2)) {
  console.log("Uneti brojevi moraju biti razliciti ");
}

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

const n = +prompt("Unesite broj");
brojac = 0;
zbir = 0;
for (i = 1; i <= n; i++) {
  if (brojac % 5 === 0) {
    brojac++;
    zbir = zbir + brojac;
  }
}
console.log(
  "Ukupno ima " +
    brojac +
    "brojeva koji su deljivi sa 5, njihova suma je: " +
    suma +
    "."
);

// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend"

switch (new Date().getDay()) {
  case 1:
    console.log("Danas je ponedeljak");
    break;
  case 2:
    console.log("Danas je utorak");
    break;
  case 3:
    console.log("Danas je sreda");
    break;
  case 4:
    console.log("Danas je cetvrtak");
    break;
  case 5:
    console.log("Danas je petak");
    break;
  default:
    console.log("Ugodno provedite vikend.");
}
