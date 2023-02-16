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
