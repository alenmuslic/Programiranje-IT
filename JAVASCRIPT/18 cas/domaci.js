let broj = +prompt("Unesite cetborocifreni broj");
if (isNaN(broj) && broj < 1000 && broj > 10000) {
  console.log("Morate uneti broj koji je crvorocifren");
} else {
}

const sumaCifra = (broj) => {
  if (isNaN(broj) && broj < 1000 && broj > 9999) {
    return "Argument nije korektan";
  } else {
    const cifraJedinice = broj % 10;
    const cifraDesetice = Math.trunc((broj % 100) / 10);
    const cifraStotine = Math.trunc((broj % 1000) / 100);
    const cifraHiljade = Math.trunc((broj % 1000) / 1000);

    return cifraJedinice + cifraDesetice + cifraStotine + cifraHiljade;
  }
};
console.log(sumaCifra("1234ss"));
console.log(sumaCifra("100"));
console.log(sumaCifra(5622));

// Math.trunc brise ostatak u ceo broj
