//Pomocu concat spojiti neki niz

const najboljiFudbaleri = ["Ronaldo", "Messi", "Rober Van Persi", "Robben"];
const najboljiKosarkasi = [
  "Lebron James",
  "LaMello",
  "Kevin Durant",
  "Michael Jordan",
];
let najboljiSportasi = najboljiFudbaleri.concat(najboljiKosarkasi);
console.log(najboljiSportasi);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.

const muskarci = ["Mitar", "Tarik", "Haris", "Alen", "Omar", "Aladin", "Amer"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const makniOmara = (niz) => {
  muskarci = [];
  devojke = [];
  for (let covek of niz) {
    if (covek === "Omar") {
      continue;
    } else if (covek[covek.length - 1] === "a") {
      devojke.push(covek);
    } else {
      muskarci.push(covek);
    }
    return `Muskarci su ${muskarci}, \n 
    devojke su ${devojke}`;
  }
  console.log(makniOmara(niz));
};
