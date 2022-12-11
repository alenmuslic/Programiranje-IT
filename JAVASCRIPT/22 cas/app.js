// 1. Uneti string se sifruje tako sto se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta,zatim 3. i 4. zamene mesta itd.Npr za string `Pera ima devojku` treba dobiti `ePari amd veojuk`.Ako string ima neoarn broj znakova poslednji znak se ne dira

// const rec = "abcd";
// let novaRec = "";
// for (i = 0; i < rec.length; i++) {
//   if (i === 0) {
//     novaRec += rec[i + 1];
//   } else if (i === 1) {
//     novaRec += rec[i - 1];
//   } else if (i === 2) {
//     novaRec += rec[i + 1];
//   } else if (i === 3) {
//     novaRec += rec[i - 1];
//   }
// }
// console.log(novaRec);

// 1.
// function menjanje(recenica) {
//   let novaRecenica = "";
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica.length % 2 !== 0 && i === recenica.length - 1) {
//       novaRecenica[1];
//     } else if (i % 2 === 0) {
//       novaRecenica += recenica[i + 1];
//     } else if (i % 2 !== 0) {
//       novaRecenica += recenica[i - 1];
//     }
//   }
//   return novaRecenica;
// }
// console.log(menjanje("Pera ima devojku"));

// 2. Unose se dva stringa A i B.Kreirati novi string kao kombinaci

function zamena(recenica1, recenica2) {
  let novaRecenica = "";
  for (i = 0; i < recenica1.length; i++) {
    if (recenica1 > recenica2) {
    }
  }
}

// function prekrivanje(recenica){
//     let novaR=""
//     while (recenica[i]!=="_" || recenica[i]!=="." ||)
//     novaR+=recenica[i]
//     i++;
//

// protectEmail = (email) => {
//   novaRec = email.split("@");
//   novaRec1 = split[0];
//   pola = novaRec1.length / 2;
//   novaRec1 = novaRec1.substring(0, novaRec1.length - pola);
//   novaRec2 = novaRec[1];
//   return novaRec1 + "...@" + novaRec2;
// };
// console.log(protectEmail("aladin_zecic@gmail.com"));

newEmail = function (email) {
  split = email.split("@");
  split1 = split[0];
  avg = split1.length / 2;
  split1 = split1.substring(0, split1.length - avg);
  split2 = split[1];
  return split1 + "...@" + split2;
};
console.log(newEmail("alenmuslic@gmail.com"));
