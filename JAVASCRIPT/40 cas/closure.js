//closure fnkcija
//Poznata je cinjenica da kada se izvrsi funkcija sve njene lokalne promenjive pokupi garbage colectir i one pretaju da postoje u memorij.
//medjutim to nije slucaj za funkciju cija promenjiva zahteva neka druga funkcija

//cLOSURE JE FUNKCIJA KOJA IMA PRAVO PRISTUPA PROMENJIVIM IZ DOMENA DRUGE FUNKCIJE
//To se najcesce postize ugradjivanjem funkcije unutar druge funkcije nakon cega se postize tzv BLOCK CHAIN.

function first() {
  const prom = "Hi";
  return `${prom} guys`;
}
console.log(first());
// console.log(prom);

function secound() {
  const a = 5;
  const b = 6;
  function closure(c) {
    return a * c;
  }
  return closure(3);
}
console.log(secound());
