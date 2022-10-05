const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const SECRET_NUMBER = 35;

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function checkGuess(guess) {
  if (guess > SECRET_NUMBER) {
    console.log("Too High!")
    return false;
  } else if (guess < SECRET_NUMBER) {
    console.log("Too Low!")
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}

function askGuess() {
  rl.question("Guess a number \n", answer => {
    const correct = checkGuess(Number(answer));
    if (!correct) {
      askGuess()
    } else {
      console.log("You won!");
      rl.close();
    }
  })
}

askGuess();