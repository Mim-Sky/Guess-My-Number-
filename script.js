'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable, because this variable is part of app state
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function() {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) //boolian negation inverter - must be true,     because I want something to happen 
  { // WHEN THERE IS NO INPUT
    displayMessage(`No Number!`);
    document.querySelector(`.number`).textContent = secretNumber; 
   
    //WHEN PLAYER WINS
  
  } else if (guess === secretNumber) {
    displayMessage(`Correct number!!!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
      if (score > highscore) {
        highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
  if (score > 1) {
      score--; //(score = score -1;)
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);  
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too low!`; 
  //     score--; //(score = score -1;)
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost the game!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }

document.querySelector(`.again`).addEventListener(`click`, function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;  
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.score`).textContent = 20;
  score = 20;
});