'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // state variable, because this variable is part of app state



document.querySelector(`.check`).addEventListener(`click`, function() {
  const guess = Number(document.querySelector(`.guess`).value);
  
  if (!guess) //boolian negation inverter - must be true,     because I want something to happen 
  { // WHEN THERE IS NO INPUT
    document.querySelector(`.message`).textContent = `No number!`;

    //WHEN PLAYER WINS

  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct number!!!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber; 

  // WHEN NUMBER IS TOO HIGH

  } else if ( guess > secretNumber) { 
    if (score > 1) {
    document.querySelector(`.message`).textContent = `Too high!`; 
    score--; //(score = score -1;)
    document.querySelector(`.score`).textContent = score;
  } else {
    document.querySelector(`.message`).textContent = `You lost the game!`;
    document.querySelector(`.score`).textContent = 0;
  }
   // WHEN NUMBER IS TOO LOW

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low!`; 
      score--; //(score = score -1;)
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function(){
  // document.querySelector(`.number`).textContent = ;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
}

);







