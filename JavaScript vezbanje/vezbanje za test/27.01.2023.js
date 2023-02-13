//Push metoda dodaje element na poslednje mesto
//Slice metoda

//this
const osoba = {
  ime: "Alen",
  prezime: "Muslic",
  godine: 18,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
punoletnost = osoba.punoletnost === true ? "jeste" : "nije";
if (punoletnost > 17) {
  console.log(`${person["ime"]} ${punoletnost} punoletan.`);
} else {
  console.log("Maloletni ste");
}
console.log(osoba.fullName);
