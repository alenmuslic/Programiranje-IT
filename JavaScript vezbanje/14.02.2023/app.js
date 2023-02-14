// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli dati string."

function position(pojavljivanje) {
  const prvaPojava = pojavljivanje.indexOf("ko osvaja");
  const drugaPojava = pojavljivanje.lastIndexOf("ko osvaja");
  if (prvaPojava === -1) {
    return `Nema`;
  } else if (prvaPojava === drugaPojava) {
    return `Jednom`;
  } else {
    return `Prva pojava se nalazi na  ${prvaPojava} poziciji,i druga pojava je na ${drugaPojava}`;
  }
}
console.log(position("ko osvaja ovaj turnir"));
console.log(position("Ko osvaja ovaj turnir"));
console.log(position("ko osvaja ovaj turnir,ko osvaja ovaj turnir"));
