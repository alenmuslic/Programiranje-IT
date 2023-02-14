// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

// const korisnik = (recenica) => {
//   velika = recenica.toUpperCase();
//   mala = recenica.toLowerCase();
//   let polaRecenice =
//     recenica.length % 2 === 0 ? recenica / 2 : Math.ceil(recenica / 2);
//   let prvaVelika = recenica.slice(0, polaRecenice).toUpperCase();
//   let drugaPol = recenica
//     .substring(polaRecenice, recenica.length)
//     .toLowerCase();
//   let prvaDruga = prvaVelika.concat(drugaPol);
//   let skola = recenica.replace(/skola/gi, "fakultet");
//   let prvihDeset = recenica.slice(0, 10);
//   let zadnjihDeset = recenica.slice(-10);

//   return `
//   ${velika}\n${mala}\n
//   ${prvaVelika}\n ${drugaPol}\n
//   ${prvaDruga}\n
//   ${skola}\n
//   ${prvihDeset}\n
//   ${zadnjihDeset}`;
// };
// console.log(korisnik("Alen Muslic Hatidza Mahmutovic"));

const korisnik = () => {
  const pisac = prompt("Unesite neku recenicu");
  const velikaSlova = pisac.toUpperCase();
  const malaSlova = pisac.toLowerCase();
  let prvaPolovina;
  let drugaPolovina;
  let polovinaRecenice;
  if (pisac % 2 === 0) {
    polovinaRecenice = pisac.length / 2;
  } else {
    polovinaRecenice = Math.round(pisac.length / 2);
  }
  prvaPolovina = pisac.slice(0, polovinaRecenice).toUpperCase();
  drugaPolovina = pisac.substring(polovinaRecenice, pisac.length).toLowerCase();
  const treca = pisac.replace(/skola/gi, "fakultet");
  const deset = pisac.substring(0, 10);
  const posladnjihDeset = pisac.slice(-10);
  return prvaPolovina.concat(
    "\n",
    drugaPolovina,
    "\n",
    treca,
    "\n",
    deset,
    "\n",
    posladnjihDeset
  );
};
console.log(korisnik());
