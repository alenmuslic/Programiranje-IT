const student = {
  ime: "Alen",
  prezime: "Muslic",
  broj_indeksa: 00213120,
  ocene: [10, 10, 9, 10, 9, 10, 10, 10, 9],
  prosek_ocena: function () {
    const suma = this.ocene.reduce((a, b) => a + b);
    return +(suma / this.ocene.length).toFixed(2);
  },
};
console.log(student.prosek_ocena());
