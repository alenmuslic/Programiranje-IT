// Domaci zadatak:
// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function isPalindrom(rec) {
  let novaRec = "";
  // pravljenje obrnutog stringa
  for (let i = rec.length - 1; i >= 0; i--) {
    novaRec = novaRec + rec[i];
  }
  if ((rec = novaRec)) {
    return "Data rec jeste polindrom";
  } else {
    return "data rec nije polidrom ";
  }
  return novaRec;
}
console.log(isPalindrom("obrnuto"));
console.log(isPalindrom("anavolimilovana"));
