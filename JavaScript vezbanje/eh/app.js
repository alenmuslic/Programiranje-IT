broj = document.querySelector("input");
dugme = document.querySelector(".submit");
tacno = document.querySelector(".h4");
randomBr = Math.round(Math.random() * 15) + 1;
rezultat = document.querySelector(".brojac");
skor = document.querySelector(".hs");
console.log(randomBr);
console.log(tacno.textContent);

var brojac = 20;

// if (isNaN(rezultat = "uneti broj je veci od 15" || "uneti broj je manji od 1" || "Broj koji ste uneli je veci" || "Broj koji ste uzeli je manji") {
// return
// }

function submit() {
  br = broj.value;
  if (br > 15) {
    tacno.innerHTML = "uneti broj je veci od 15";
  } else if (br < 0) {
    tacno.innerHTML = "uneti broj je manji od 1";
  } else if (br > randomBr) {
    tacno.innerHTML = "Broj koji ste uneli je veci";
  } else if (br < randomBr) {
    tacno.innerHTML = "Broj koji ste uneli je manji";
  } else if (br == randomBr) {
    tacno.innerHTML = "Cestitam 🎉 ";
    if (rezultat.innerHTML > skor.innerHTML) {
      skor.innerHTML = rezultat.innerHTML;
    }
  }
}

let count = 0;
dugme.addEventListener("click", submit);

const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
  location.reload();
});

var highestRecord = 0;

// function updateRecord() {
//   var currentScore = parseInt(document.getElementById("input1").value);
//   if (currentScore > highestRecord) {
//     highestRecord = currentScore;
//     document.getElementById("highestRecord").innerHTML = highestRecord;
//   }
// }
// if (tacno === radndomBr) {
//   guessResult.textContent = "Cestitam 🎉 ";
//   score++;
//   highScore.textContent = score;
//   resetGame();
// }
