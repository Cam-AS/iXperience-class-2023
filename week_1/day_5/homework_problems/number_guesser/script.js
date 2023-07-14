const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', (e) => {
  const randomNumber = Math.round(Math.random() * 10);

  const elem = document.createElement('div');
  elem.classList.add('alert');
  output.innerHTML = '';

  if (input.value == randomNumber) {
    this.show();
    elem.classList.add('alert-success');
    elem.innerHTML = 'Hooray! It was ' + randomNumber;
  } else {
    this.show();
    elem.classList.add('alert-danger');
    elem.innerHTML = 'Nope... it was ' + randomNumber;
  }

  setTimeout(() => {
    this.hide();
  }, 2500);
  input.value = '';

  output.appendChild(elem);
});

function show() {
  output.classList.remove('hide');
  output.classList.add('show');
}

function hide() {
  output.classList.remove('show');
  output.classList.add('hide');
}
