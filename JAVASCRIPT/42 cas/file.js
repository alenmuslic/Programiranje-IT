//Napraviti novi niz koji ce sadrzati one elemente cija je starost veca od 17
const godine = [
  { starost: 19 },
  { starost: 12 },
  { starost: 13 },
  { starost: 20 },
  { starost: 18 },
  { starost: 17 },
];
const alen = godine.filter((godine) => godine.starost > 17);
console.log(alen);
