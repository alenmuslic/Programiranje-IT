//object built in methods //
const person = {
  firstName: "Hamde",
  lastName: "Medjedovic",
  age: 16,
};

//object,freez(obj) metoda cini objekat nepromenjivim
person.age = 17;
console.log(person);
Object.freeze(person);
person.age = 22;
console.log(person);

//Object.seal(obj) cini objekat promenjivim s tim sto nema mogucnost dodaanja(brisanja) novih svojstava metoda

//object.keys vraca niz kljuceva
console.log(Object.keys(person));

//object.entries vrazca niz nizova:
//svaki podniz je niz od dva elementa
const entries = Object.entries(person);
console.log(entries);

//Obj.is (obj1,obj2)
const obj1 = {
  first: "Mitar",
  secound: "Vrnic",
};

const obj2 = {
  first: "Mitar",
  secound: "Vrnic",
};
console.log(Object.is(ojb1, obj2));

//Destructuring
const person4 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: 18,
};
const firstName = person4.firstName;
console.log(firstName);

const { firstName } = person4;
console.log(firstNae);
console.log(age);
