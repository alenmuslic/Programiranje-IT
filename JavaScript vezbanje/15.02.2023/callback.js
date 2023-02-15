// Napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja, a celu stvar ce da izvrsi callback funkcija. Callback funkcija ima 2 parametra, i ispisuje rezultat par1 stepenovan par2.

const napravi = (callback) => {
  console.log("Prvi broj stepenovan drugim");
  callback(2, 3);
};

function callback(part1, part2) {
  //   return part1 ** part2;
  console.log(part1 ** part2);
}
napravi(callback);
