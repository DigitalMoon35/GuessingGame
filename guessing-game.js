const readline = require("node:readline");
const art = require("ascii-art");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let SECRET_NUMBER;

// choose random number between min & max
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Check user guess against secret number
function checkGuess(guess) {
  if (guess > SECRET_NUMBER) {
    console.log("Too High!");
    return false;
  } else if (guess < SECRET_NUMBER) {
    console.log("Too Low!");
    return false;
  } else {
    console.log("You Guessed the Number!!");
    return true;
  }
}

// ask user to guess, ask again if incorrect. 
function askGuess() {
  rl.question("Guess a number: ", answer => {
    const correct = checkGuess(Number(answer));
    if (!correct) {
      askGuess()
    } else {
      art.font("You Won!", 'doom', (err, rendered) => {
        if (err) {
          console.log(err);
        }
        console.log(rendered);
      });
      rl.close();
    }
  })
}

// main function
// initializes game with user input and prompts for guess.
function askRange() {
  rl.question("Enter a max number: ", max => {
    rl.question("Enter a min number: ", min => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`)
      SECRET_NUMBER = randomInRange(Number(min), Number(max));
      askGuess();

    });
  });
}

askRange()