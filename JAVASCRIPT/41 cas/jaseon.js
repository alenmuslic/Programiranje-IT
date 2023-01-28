//json-JavaScript Object Notation//
//JSON je formt za skladistenje i prenos podataka.
//najcesce se koristi kada se podaci salju sa servera ka WEB stranici.
//json podaci su mnogo slicni js objektu i oni se zapisuju :

const person = {
  FirstName: "Amer",
  LastName: "Honic",
  age: 19,
};
// const strObject = person.toString();
// console.log(strObject);

//keys odnosno names zahtevaju duple navodnik, za razliku od JavaScript objekta.
//Dve metode za pretvaranje:
//1.JSON.stringify()
// JSON.stringify oretvara nas ovjekat u JSON format pa JSON u string.
//Koristi se za slanje podatka...
const strObject = JSON.stringify(person);
console.log(strObject);
console.log(typeof strObject);
//2..JSON.parse()
//Analizira se neki string i u slucaju mogucnosti pretvara u bjet (nama citljiv podatak)
const obj = JSON.parse(strObject);
console.log(obj);
