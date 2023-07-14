const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', (e) => {

  const randomNumber = Math.round(Math.random() * 10);

  const elem = document.createElement('div');
  elem.classList.add('alert');
  output.innerHTML = '';

  if (input.value == randomNumber) {
    elem.classList.add('alert-success');
    elem.innerHTML = 'yes it was ' + randomNumber;
  } else {
    elem.classList.add('alert-danger');
    elem.innerHTML = 'no it was ' + randomNumber;
  }

  output.appendChild(elem);
});