function onButtonClicked() {
  console.log('Button was clicked');
}

// Examine the DOM

let dom;
dom = document;
console.log(dom);
console.log(dom.all);
console.log(dom.all.length);
console.log(dom.all[9]);
// dom.all[9].innerHTML = 'Goodbye there';

// Documents object methods allow us to pull things from the DOM
// In Vanilla JS we have single and multiple element selectors
// Single element selectors grab 1 element by id or class
// Multiple element selectors will return a list of elements

// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes
//  (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.

// Single Element Selectors
let button = dom.getElementById('button-1');
// button.innerHTML = 'This changed';
console.log(button);

// Get things from the element
console.log(button.id);
console.log(button.classList);
console.log(button.className);

// Fetch the table
let table = document.getElementById('table');
console.log(table);

// Fetch Marks Cell
let marksCell = document.getElementById('marks-cell');
console.log(marksCell);
marksCell.innerHTML = 'Cameron';

// Multiple element selectors
let tables = document.getElementsByClassName('table');
console.log(tables);

// Query Selector
console.log(document.querySelector('#table-1'));
console.log(document.querySelector('#table-2'));
console.log(document.querySelector('table'));

// Adding Event Listeners
document.querySelector('#button-2').addEventListener('click', () => {
  console.log('Goobye Clicked');
});

document.querySelector('#button-2').addEventListener('mouseout', () => {
  alert('You left the button');
});

// Interest Calculator

let loanAmount = document.getElementById('loan-amount');
let interest = document.getElementById('interest');
let years = document.getElementById('years');
let output = document.getElementById('output');

function calculateLoan() {
  if (!isValid()) {
    alert('Fill in all the values');
    return;
  }
  // console.log(loanAmount.value);
  // console.log(interest.value);
  // console.log(years.value);

  let loan = loanAmount.value;
  let interestRate = interest.value;
  let timeToRepay = years.value;

  const total = loan * Math.pow(1 + interestRate / 100, timeToRepay);

  output.innerHTML = `You will pay back $ ${total.toFixed(
    2
  )} over ${timeToRepay} years.`;
  resetForm();
}

function isValid() {
  return loanAmount.value != '' && interest.value != '' && years.value != '';
}

function resetForm() {
  loanAmount.value = '';
  interest.value = '';
  years.value = '';
}
