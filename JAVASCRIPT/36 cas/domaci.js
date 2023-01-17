const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.
const niz = [4, 5, 30, 25, 18, 20];
const novi = [];
for (let i of niz) {
  if (i < 17) {
    continue;
  } else {
    novi.push(i);
  }
}
console.log(novi);
