var randomNumber = Math.floor(Math.random() * 5) + 1;
var guessInput = document.getElementById("guess");
var guessButton = document.querySelector("button");
var guessResult = document.getElementById("result");
var livesLeft = document.getElementById("lives");
var highScore = document.getElementById("highscore");
var lives = 20;
var score = 0;

function checkGuess() {
  var guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 5) {
    guessResult.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    lives--;
    livesLeft.textContent = lives;

    if (guess === randomNumber) {
      guessResult.textContent = "Congratulations! You guessed the number!";
      score++;
      highScore.textContent = score;
      resetGame();
    } else if (lives === 0) {
      guessResult.textContent =
        "Sorry, you lost. The number was " + randomNumber + ".";
      resetGame();
    } else if (guess < randomNumber) {
      guessResult.textContent = "Too low. Try again.";
    } else if (guess > randomNumber) {
      guessResult.textContent = "Too high. Try again.";
    }
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  lives = 20;
  livesLeft.textContent = lives;
}
