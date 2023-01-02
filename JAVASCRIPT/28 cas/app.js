// Metoda za prikazivanje datuma:

const trenutno = new Date();
console.log(trenutno);

// 1. toString()
console.log(trenutno.toString());

//2. toUTCString()
console.log(trenutno.toUTCString());

//3. toDateString
console.log(trenutno.toDateString());

//4. toISOString
console.log(trenutno.toISOString());

//5.toTimeString
console.log(trenutno.toTimeString());

//6.toLocaleTimeString
console.log(trenutno.toLocaleTimeString());

//get metode
//Koristimo ih za dobijanje informacija iz Date objeekta

//getFullYest()
console.log(trenutno.getFullYear());

//getMonth
console.log(trenutno.getMonth());

//getMinute
console.log(trenutno.getMinutes());

//getDate
console.log(trenutno.getDate());

//getDay
let nedelja = newDate("2022 Dec 25");
console.log(trenutno.getDay());
