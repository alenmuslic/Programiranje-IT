// Array iteration
//array iteratio  metoda prolazi kroz svaki element niza.


//forEach() metoda poziva funkciju za svaki elemnt niza.

const niz =["tarik","hamed","emin","bakir","dzenan"]
niz.forEach((element) => {
console.log(element)
})


// map() metoda  kreira novi niz sa logikom predstavljenom unutar callback funkcije unutar datom me

//Preko petlje napraviti novi niz koji ce imati sve elementeirugubakbig niza

const niz2=[]
for (let student of niz) {
    niz2.push(student)
}
console.log(niz2)


//Preko map() metode napraviti noci niz gde ce imena svakijh studenata pocinjati velikim slovom


novi niz4=niz.map((student) => student[0].toUpperCase() + student.slice(1))
console.log(niz4)