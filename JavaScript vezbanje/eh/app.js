broj = document.querySelector("input");
dugme = document.querySelector(".submit");
tacno = document.querySelector(".h4");
randomBr = Math.round(Math.random() * 15) + 1;
rezultat = document.querySelector(".brojac");
console.log(randomBr);

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
var count = 0;
dugme.addEventListener("click", function () {
  count++;
  rezultat.innerHTML = 20 - count;
});

const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
  location.reload();
});
