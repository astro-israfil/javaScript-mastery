# Learn Document Object Model (DOM) and build some projects.

## Project 1: Color Switcher.
```javaScript
    
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
    }
  });
});
```

## Project 2: BMI Calculator

```javaScript
const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  if (height <= 0 || isNaN(height)) {
    results.appendChild(
      document.createTextNode('You entered an invalid height.')
    );
    results.style.color = 'red';
  } else if (weight <= 0 || isNaN(weight)) {
    results.appendChild(
      document.createTextNode('You entered an invalid weight.')
    );
    results.style.color = 'red';
  } else {
    const bmi = ((weight / height ** 2) * 10000).toFixed(2);
    results.innerHTML = bmi;
    if (weight < 18.6) {
      results.innerHTML += `<div style="color: blue;">Under Weight</div>`;
    } else if (weight >= 18.6 && weight <= 24.9) {
      results.innerHTML += `<div style="color: green;">Normal Range</div>`;
    } else {
      results.innerHTML += `<div style="color: red;">Over Weight</div>`;
    }
  }
});
```

## Project 3: Digital Clock
```javaScript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4: Number Guessing Game

```javaScript
let randomNumber = getRandomNumber();
const submitBtn = document.querySelector('#subt');
const userGuess = document.querySelector('#guessField');
const validMsgEl = document.querySelector('#valid-msg');
const scoreEl = document.querySelector('.score');
const geussesEl = document.querySelector('.guesses');
const remainingTermEl = document.querySelector('.remaining-term');
const lowOrHiEl = document.querySelector('.lowOrHi');
let remainingPlayTerm = 10;
let previousGuess = [];
let score = 0;

function getRandomNumber(min = 1, max = 100) {
  const randomNumber = Math.floor(Math.random() * (1 + max - min)) + min;

  return randomNumber;
}

function getUserGuess() {
  const userGuessNumber = parseInt(userGuess.value);
  return validateUserGuess(userGuessNumber);
}

function validateUserGuess(userGuessNumber) {
  if (isNaN(userGuessNumber)) {
    validMsgEl.innerHTML = 'Please Enter a valid number';
  } else if (userGuessNumber < 1) {
    validMsgEl.innerHTML = 'Please Enter a number greater than 0';
  } else if (userGuessNumber > 100) {
    validMsgEl.innerHTML = 'Please Enter a number is not greater than 100';
  } else {
    validMsgEl.innerHTML = '';
    return userGuessNumber;
  }
}

function displayResult(msg) {
  remainingTermEl.innerHTML = remainingPlayTerm;
  lowOrHiEl.innerHTML = msg;
  geussesEl.innerHTML = previousGuess.join();
  scoreEl.innerHTML = score;
}

function compareUserGuess(userGuessNumber) {
  if (userGuessNumber < randomNumber) {
    previousGuess.push(userGuessNumber);
    remainingPlayTerm--;
    displayResult('LOW');
    if (remainingPlayTerm === 0) {
      endGame();
    }
  } else if (userGuessNumber > randomNumber) {
    previousGuess.push(userGuessNumber);
    remainingPlayTerm--;
    displayResult('HI');
    if (remainingPlayTerm === 0) {
      endGame();
    }
  } else {
    previousGuess = [];
    remainingPlayTerm = 10;
    score += 10;
    randomNumber = getRandomNumber();
    displayResult('EXACT');
  }
}

function playGame() {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuessNumber = getUserGuess();
    if (userGuessNumber) {
      compareUserGuess(userGuessNumber);
    }
  });
}

function endGame() {
  let afterTime = 5000;
  let intervalId = setInterval(function () {
    displayResult(`GameOver play again after", ${afterTime / 1000}s`);
    afterTime -= 1000;
  }, 1000);

  submitBtn.disabled = true;
  userGuess.value = '';
  setTimeout(function () {
    submitBtn.disabled = false;
    remainingPlayTerm = 10;
    previousGuess = [];
    score = 0;
    displayResult('');
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 5000);
}

if (remainingPlayTerm > 0) {
  playGame();
}
```