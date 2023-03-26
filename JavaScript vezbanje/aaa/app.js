number = document.querySelector("input");
form = document.querySelector("form");
container = document.querySelector("div");
par = document.querySelectorAll("p")[0];
par2 = document.querySelectorAll("p")[1];
par3 = document.querySelectorAll("p")[2];
number.addEventListener("keypress", getValue);
randnum = Math.round(Math.random() * 20) + 1;
form.addEventListener("submit", Prevent);
score = 20;
hiscore = 0;
function Prevent(e) {
  e.preventDefault();
}

console.log(randnum);
function getValue(e) {
  if (e.key == "Enter") {
    val = number.value;
    if (val == randnum) {
      par.innerText = "GG";
      newbtn = document.createElement("button");
      newbtn.innerText = "Play Again ?";
      container.appendChild(newbtn);
      hiscore = score;
      par3.innerText = hiscore.toString();
    }
    if (val < randnum) {
      par.innerText = "low";
      score--;
      par2.innerText = score.toString();
    }
    if (val > randnum) {
      par.innerText = "high";
      score--;
      par2.innerText = score.toString();
    }
    number.value = "";
  }
}
