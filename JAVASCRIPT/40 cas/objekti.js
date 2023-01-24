//objekti su gkavba stvar u JavaScriptu
//objekti su promenjive koje sadrze vise vrednosti.
//predstavljaju se u key:value parovima

const person = {
  fistName: "Nikola",
  lastName: "Bozovic",
  age: 18,
  adult: true,
};
console.log(person);
//Pristupanjem odjredjeni objektima mozemo izvrsiti na 2 nacina
//1.ObjectName.promepryName(person.firstName)

//2.ObjectName["promepryName"]
//  (person["firstName"])
console.log(person.lastName);

//Object methods
//Objeki takodje mogu imati metoda
//Metode su funkcije koje ce se izvrsiti na objektu
//Metode su skladistene u svojstvima kao definicije funkcije

const person2 = {
  firstName: "Alen",
  lastName: "Muslic",
  age: 17,
  adult: false,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person2.fullName());

//u JS this je keyword(rezervisana rec) koja ukazuje na neki objekat
//this nije promenjiv i ne mozemo promeniti vrednost
//this ukazuje na razlicit objekat u zavosnosti od toga gde se koristi
//u nekom objektu this ukazuje na taj objekat
