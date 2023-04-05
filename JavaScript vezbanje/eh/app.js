broj = document.querySelector("input");
dugme = document.querySelector(".submit");
tacno = document.querySelector(".h4");
randomBr = Math.round(Math.random() * 15) + 1;
rezultat = document.querySelector(".brojac");
livesLeft = document.getElementById(".brojac");
skor = document.querySelector(".hs");
console.log(randomBr);
console.log(tacno.textContent);
rezultat = 20;
// var brojac = 21;

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

dugme.addEventListener("click", submit);

const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
  location.reload();
});
