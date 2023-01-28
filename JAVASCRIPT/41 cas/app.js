//Js objekti su mutable (promenjive) //

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godina: 19,
};
const dzenan2 = dzenan;
console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godina = 26;
console.log(dzenan2);
console.log(dzenan);

//Brisanje svojstava iz objekta:
const mitar = {
  ime: "Mitar",
  prezime: "Vranic",
  godina: 20,
  skola: "Gimnazija",
};
// delete mitar.skola;
//delete obj.property brise i key value
// console.log(mitar);
delete mitar["skola"]; //2.nacin brisanja elementa iz niza
console.log(mitar);

//Napomena:
//Vrednost nekog objekta mogu biti:
//objekti
//nizovi
//funkcije

//konvertovanje objekta u niz:
//Object.valuses(obj)
const niz = Object.values(mitar);
console.log(niz);

//Dodavanje novih svojstava:
mitar.punoletnost = true;
console.log(mitar);
