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
console.log(par("Pera ima devojku"));

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

const funkcija = (karta) => {
  const trosak = 320;
  const brojKarti = karta.length;
  const newArr = karta.map((proizvod) => {
    return {
      name: proizvod.name,
      totalPrice: proizvod.price * proizvod.amount,
    };
  });
  const suma = newArr.reduce((a, b) => a + b.totalPrice, trosak);
  return `You got ${brojKarti} in cart, shipping cost is ${trosak}, your total is ${suma}.`;
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

function pogledajProfil(name, prop) {
  const ime = contacts.find((contact) => contact.firstName === name);
  if (ime !== undefined) {
    if (Object.keys(ime).includes(prop)) {
      return ime[`${prop}`];
    } else {
      return `No such property.`;
    }
  } else {
    return `No such contact.`;
  }
}

console.log(pogledajProfil("Akira", "likes"));
console.log(pogledajProfil("Imran", "likes"));
console.log(pogledajProfil("Kristian", "hobbies"));

//2.zadatak
// Napraviti pomocni niz koji ce sadrzati elemente od oba niza. Napraviti jos jedan pomocni niz
// koji ce iz prvog dodatnog niza uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
//Funkcija na kraju treba da vrati dva napravljena pomocna niza.
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];
const array = (arr1, arr2) => {
  const pomocniNiz = arr1.concat(arr2);
  const pomocniNiz2 = [];
  pomocniNiz.filter((element) => element % 2 === 0);
  pomocniNiz2.unshift(10, 20);
  return `Prvi pomocni niz je  ${pomocniNiz},a drugi je ${pomocniNiz2}`;
};
console.log(array(DATA1, DATA2));

////////////////////////////////////////////////////
// Napraviti funkciju koja ispituje neki niz (argument).
// Ako produkt ima u zalihama vise od 20 treba:
// Treba datom produktu smanjiti cenu za 20%
// Ako produkt ima u zalihama vise od 40 treba:
// Treba datom produktu smanjiti cenu za 40%
// U slucaju da u zalihama ima 20 i manje kolicine,
// cena se ne menja.

const products = [
  {
    id: 1,
    name: "ARSENAL 22/23 HOME JERSEY",
    price: 50,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/ARSENAL_22-23_HOME_JERSEY_Y_Red_HA5339_01_laydown.jpg",
    currency: "EUR",
    quantity: 41,
  },
  {
    id: 2,
    name: "ARSENAL CONDIVO 22 TRAINING TOP",
    price: 65,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/32f9a996849147b284c1ae94009678a1_9366/Arsenal_Condivo_22_Training_Top_Blue_HC1252_01_laydown.jpg",
    currency: "EUR",
    quantity: 12,
  },
  {
    id: 3,
    name: "ARSENAL BEANIE",
    price: 23,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8589fb63d02499db805ae7a00cf5273_9366/Arsenal_Beanie_Black_HM9965_01_standard.jpg",
    currency: "EUR",
    quantity: 7,
  },
  {
    id: 4,
    name: "ARSENAL ANTHEM JACKET",
    price: 120,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2db81ab8d14d4817a659ae8c01155d2e_9366/Arsenal_Anthem_Jacket_Blue_HF4030_21_model.jpg",
    currency: "EUR",
    quantity: 36,
  },
  {
    id: 5,
    name: "ARSENAL TRAVEL HOODIE",
    price: 85,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44d076827f3d4ea08c6bae85012f97bc_9366/Arsenal_Travel_Hoodie_Black_HF4031_01_laydown.jpg",
    currency: "EUR",
    quantity: 0,
  },
  {
    id: 6,
    name: "ARSENAL FC 93-94 JERSEY",
    price: 85,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edf2037f434d46479c96adbd0085ce75_9366/Arsenal_FC_93-94_Jersey_Yellow_HK5626_01_laydown.jpg",
    currency: "EUR",
    quantity: 68,
  },
  {
    id: 7,
    name: "ARSENAL DNA CAP",
    price: 23,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80b51f1feee344479c1eae760142da56_9366/Arsenal_DNA_Cap_Black_HM9968_01_standard.jpg",
    currency: "EUR",
    quantity: 4,
  },
  {
    id: 8,
    name: "ARSENAL TRAVEL BACKPACK",
    price: 65,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7371783770f41e98afeae9a00a5a2c1_9366/Arsenal_Travel_Backpack_Black_HM9967_01_standard.jpg",
    currency: "EUR",
    quantity: 14,
  },
];

const discount = (arr) => {
  const newArr = arr.map(function (product) {
    if (product.quantity > 40) {
      product.price = product.price * 0.6;
      return product;
    } else if (product.quantity > 20) {
      product.price = product.price * 0.8;
      return product;
    } else {
      return product;
    }
  });
  return newArr;
};
console.log(discount(products));
