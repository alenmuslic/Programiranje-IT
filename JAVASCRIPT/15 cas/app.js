const isSunny = false;
if (isSunny === true) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju je kisa");
}

// Postoji 8 FLSY vrednosti i one su:
// 1. False
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. Undefinted
// 7. null
// 8. NaN

// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka DA LI JE UNETA VREDNOST TRUTY ILI FALSY vrednost
function ispis() {
  unos = prompt("unesite nesto:");
  if (unos) {
    return "UNETA JE TRUTY VREDNOST";
  } else {
    return "Uneta je falsy vrednost";
  }
}
console.log(ispis());
