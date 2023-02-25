//JavaScript set je kolekcija unikatnih vrednosti.
const mySet = new Set([14, "it camp", true, [1, 2, 3]]);
console.log(mySet);

//Metoda setova:
//1.Za kreiranje setova koristimo new Set([1,2,3])
//2.za dodavanje elemenata koristimo add() metodu;
mySet.add("hatidza");
console.log(mySet);
//za brisanje elemenata korisimo delet() metodu
mySet.delete(true);
console.log(mySet);

//4.Za proveru da li set sadri odredjenu vrednost koristimo has() metodu.
console.log(mySet.has(true));

//5.forEach() mtode sluzi za iteraciju kroz set
mySet.forEach((el) => console.log(el));
//6.values metoda vraca iterator vrednost seta;
console.log(mySet.values());

//Za proveru duzine seta se koristi size property:
console.log(mySet.size);

//mnapraviti funkciju koja izbacuje duolikate

// const niz=[1,2,3,2,2,3,4,1]
// const duplikati = (niz) => {
// for (i=0;i<niz.length;i++){
//     if (niz[i]===niz[i+1]){

//     }
// }
// }

//Mape u JavaScript sadrze key-value parove gde keys(kljucevi) mogu viti bilo kog tipa podatka
//Mape pamte originalni redosled elementa

//Metode kod map
