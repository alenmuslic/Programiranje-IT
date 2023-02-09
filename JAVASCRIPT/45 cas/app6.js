const objekatNeki = {
  dodatniBroj: function () {
    this.godine += 1;
  },
};
function napraviLika(ime, prezime, godine) {
  const noviLik = Object.create(objekatNeki);
  noviLik.ime = ime;
  noviLik.prezime = prezime;
  noviLik.godine = godine;
  return noviLik;
}
const alen = napraviLika("Alen", "Muslic", 17);
console.log(alen);
alen.dodatniBroj();
console.log(alen);
