'use strict';

/* console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 20;

document.querySelector('.guess').value = 18; */

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when input is empty
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    //when player win
  } else if (secrateNumber === guess) {
    document.querySelector('.number').textContent = secrateNumber;
    document.querySelector('.message').textContent = '🏆Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
    //when score is too high
  } else if (guess !== secrateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secrateNumber ? '📈Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } /* else if (guess > secrateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }

    //when score is too low
  } else if (guess < secrateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
});
