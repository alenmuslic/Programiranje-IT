// 1, Var

var x; //Obezbedjivanje promenjive x (Obezbedjivanje lokacije memorije za promenjivu x)
var x = 15; //Inicijalizacija promenjive x (Dodela vrednosti vec deklarisanje promenjivoj x)
console.log(x);

//Redeklarisanje promenjive x definisane putem var keyword je dozvoljeno , bilo gde u prostoru.
var x;
//Reinalizacija proenjive x ddefinisane putem car keyword je dozbvoljeno bilo gde u prostoru .
x = 22;

//2. let=DEFINISANJE PROMENJIVE ZA KOJU POSTOJI MOGUCNOST PROMENE VREDNOSTI
let y;
y = 14;
// let y=14;
console.log(y);

//rEDEFINISANJE PROMENJVE DEFINISANE PUTEM LET KEYWORD NIJE DOZVOLJENO AKO NIJE DOZVOLJENO AKO SE RADI O ISTOM PROSTORU

y = 12;
console.log(y);

//Promenjive koje su deinisane putem let ili dconst keword nam obezbedjuju Block Scope.

{
  //   y = 12;
  //   console.log(y);
  //Redeklaracija definisane putem let je u drugom prostoru je dozvoljeno.
  let y = 177;
  console.log(y);
}

//3. CONST-Promenjive dedinisae putem const moraju biti odjednom deklarisane i inicijalizovane
// const u;
// u=233;
// const u = 26;
// console.log(u);
//Redeklarisanje promenjive definisane putem const nije dozvoljeno kada se radi o istom prostoru
const u = 24;
console.log(u);

// const u = 23;
// console.log(u);

// let x, y, u; //korektan nacin deklarisanja promenjvih

//Sve karakteristike koje vaze za promenjive definisane putem let u block scpoe, vazi i za promenjive definisane putem const

const cars = ["Audi", "Golf"];
