'use strict';

//DOM - doc object model
//getting the html, css with js elements
//stored in a tree strctor
//DOM isnt js, its web APIS

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1; //new number
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

//  check function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //instead of string
  if (!guess) {
    displayMessage('No Number Guessed...');
  } else if (guess === secretNumber && score > 0) {
    displayMessage('Correct number!!!');

    document.querySelector('body').style.backgroundColor = '#60b347'; //instead dash do CAPITAL letter

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //guess is not equal to secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
}); // the second argument is function (value), anonimous
