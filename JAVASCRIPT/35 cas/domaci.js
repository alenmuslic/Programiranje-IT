// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

const niz = ["Ova recenica ce biti ispisana velikim slovima"];
function velika(niz) {
  const velika = niz.map((niz) => niz.toUpperCase());
  return velika;
}
console.log(velika(niz));

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
const brojevi = [-2, 3, 4, 11, 13, -2];

function drugi(brojevi) {
  const nizkvadrat = brojevi.map((alen) => alen * alen);
  return nizkvadrat;
}
console.log(drugi(brojevi));

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza
function treci(niz) {
  const nizkoren = brojevi.map((aLen) => Math.sqrt(Math.abs(aLen)));
  return nizkoren;
}
console.log(treci(niz));

//4.// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

// const brojevi1 = [-5, 4, 3, 10, 14, -5];
// function brojevi2(negativniPozivivni) {
//   const nekiNiz = [];
//   for (let i of brojevi) {
//     if (i < 0) {
//       noviNiz.push(Math.abs(i));
//     } else if (i > 0) {
//       noviNiz.push(Math.pow(i, 2));
//     }
//   }
//   return noviNiz;
// }
// console.log(brojevi2(negativniPozivivni));



const kvadriranje = (broj) => {
   if (broj < 0) {
    return -broj;
  }  
  else  {
    return broj ** 2;
  }

};
const brojevi1 = [-5, 4, 3, 10, 14, -5];
const brojevi2 = brojevi1.map(kvadriranje);
console.log(brojevi2);

// Napraviti funkciju koja pravi novi niz gde ce se pozitivni elementi kvadrirati,negativni pomnoziti sa (-1) a ako se neki element ponavlja vise pta u originalnom nizu,na svako sledee pojavljivanje ce se u novo nizu dodati element "ovo je duplikat"


//kvadratirati one brojeve koje imaju index 0,3,5
const brojevi15=[1,2,4,-6,8,3,6,8]
const brojevi3=brojevi15.map(element,index) =>{
if (index===0 || index===5 || index===5){
return element**2;
}
else {
    return element 
}

};
console.log(brojevi3)


//


    






