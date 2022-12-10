const prvaIPoslednja = function (recenica) {
  const pozicijaPrvogRazmaka = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, pozicijaPrvogRazmaka);
  const pozicijaPoslednjegRazmaka = recenica.lastIndexOf(" ");
  poslednjaRec = recenica.slice(pozicijaPoslednjegRazmaka + 1);
  const recenica2 = prvaRec.concat(" ", poslednjaRec);
  return recenica2;
};

console.log(prvaIPoslednja("Prva i poslednja rec"));

//  Za uneti string A, treba izdvojiti podstring B,koji pocinje od unete pozicije N i ima M znakova.Npr za strig //PERA IMA DEVOJKU// N=6 i M=7 dobija se B=`ima dev`

const podString = (string, pocetak, duzina) => {
  const noviString = string.substr(pocetak, duzina);
  return noviString;
};
console.log(podString("Recenica kojoj cemo uzeti nekoliko karaktera", 5, 9));

// 3. Unosi se string A i znak Z.Kreirati novi string B koji se dovija ako sto se iz unetog stringa izbacuje svaka pojava znaka Z.Npr za unet string madagaskar i znak adovijamo resulat mdgskr

function izbacivanje(recenica) {}
