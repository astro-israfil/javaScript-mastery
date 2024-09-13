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