// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

function par(niz) {
  let novaRecenica = "";
  for (let i = 0; i < niz.length; i++) {
    if (niz.length % 2 !== 0 && i === niz.length - 1) {
      novaRecenica += niz[i];
    } else if (i % 2 === 0) {
      novaRecenica += niz[i + 1];
    } else if (i % 2 !== 0) {
      novaRecenica += niz[i - 1];
    }
  }
  return novaRecenica;
}
console.log(par("Alen voli Hatidzu"));

//2.
// There are array of objects with all products that someone bought. In product object we got name, price per unit, and amount of units. Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
// After you did the job with new array, you need to sum all prices of every product and return total sum value, and add a FIXED 320 shipping costs.
// After all of that you should print in console following statement:
// 'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'

//// Постоји низ објеката са свим производима које је неко купио. У објекту производа добијамо назив, цену по јединици и количину јединица. Ваш посао је да прођете кроз низ и направите нови низ објеката са именом два пара кључ/вредност и укупном ценом за тај производ.
// Након што сте обавили посао са новим низом, потребно је да збројите све цене сваког производа и вратите укупну збирну вредност, и додате ФИКСНИХ 320 трошкова испоруке.
// После свега тога требало би да одштампате у конзоли следећу изјаву:
// 'Имате ${нум оф продуцтс} у корпи, цена испоруке је ${схиппинг цост}, ваш укупан износ је ${тотал}.'

const CART_DATA = [
  {
    id: 1,
    name: "Hawai Shirt",
    price: 30,
    amount: 2,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Adidas Slippers",
    price: 35,
    amount: 1,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 6,
    name: "White T-Shirt",
    price: 15,
    amount: 4,
    categorty: "summer",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Summer hat",
    price: 7.5,
    amount: 3,
    categorty: "summer",
    rating: 40,
  },
];

const funkcija = (cart) => {
  const trosak = 320;
  const imeProizvoda = cart.length;
  const newArr = cart.map((proizvod) => {
    return {
      name: proizvod.name,
      totalPrice: proizvod.price * proizvod.amount,
    };
  });
  const suma = newArr.reduce(
    (prevValue, currValue) => prevValue + currValue.totalPrice,
    trosak
  );
  return `You got ${imeProizvoda} in cart, shipping cost is ${trosak}, your total is ${suma}.`;
};

console.log(funkcija(CART_DATA));

// Imamo niz objekata koji predstavljaju različite ljude na našim listama kontakata.
// Funkcija lookUpProfile koja uzima ime i svojstvo (prop) kao argumente je unapred napisana za vas.
// Funkcija treba da proveri da li je ime stvarno ime kontakta i da li je dato svojstvo (prop) svojstvo tog kontakta.
// Ako su oba tačna, onda vrati "vrednost" tog svojstva.
// Ako ime ne odgovara nijednom kontaktu, vratite string Nema takvog kontakta.
// Ako prop ne odgovara nijednom važećem svojstvu kontakta za koje je pronađeno da odgovara imenu, onda vratite string Nema takvog svojstva.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function pretraziProfil(ime, nzm) {
  const objectWithName = contacts.find((contact) => contact.firstName === name);
  function lookUpProfile(name, prop) {
    const objectWithName = contacts.find(
      (contact) => contact.firstName === name
    );
    if (objectWithName !== undefined) {
      if (Object.keys(objectWithName).includes(prop)) {
        return objectWithName[`${prop}`];
      } else {
        return `No such property.`;
      }
    } else {
      return `No such contact.`;
    }
  }

  console.log(lookUpProfile("Akira", "likes"));
  console.log(lookUpProfile("Imran", "likes"));
  console.log(lookUpProfile("Kristian", "hobbies"));
}
