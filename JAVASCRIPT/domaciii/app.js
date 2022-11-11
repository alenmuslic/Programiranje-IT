const recenica = prompt("Unesite neku recenicu");
const duzina = recenica.length;
for (let i = 0; i < duzina; i++) {
  if (recenica[i] === "a") {
    console.log("5");
  } else if (recenica[i] === "s") {
    continue;
  } else {
    console.log(recenica[i]);
  }
}
