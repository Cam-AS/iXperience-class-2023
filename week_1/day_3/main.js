// Prints an output to the console
console.log('We are connected!');

// Variables in JS

// we pretty ignore var
// var

// let
// let can reassigned
let a = 0;
console.log(a);
a = 10;
console.log(a);
a = 'Hello there';
console.log(a);

// const
// can't be reassigned
const myName = 'Cameron';
console.log(myName);
// Uncaught TypeError: Assignment to constant variable.
// myName = ' Michelle';
// console.log(myName);

// Data Types in JS

// Primitives
// Stored in a location on the stack

// string

// check the type
// console.log(typeof myName);

// number
// boolean
// null (intentionally left empty)
// undefined (variable unassigned)

// Reference
// Dynamically allocated memory
// A pointer to a location in memory

// arrays
// objects
// literals
// anything else (pretty much)

// String Methods and Concatenations

const firstName = 'Cameron';
const lastName = 'Kirkpatrick';
const age = 29;
const greeting = 'Hello my name is Cam';
const tags = 'software, programming, engineering';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let myGreeting = `${greeting}, but my full 
  name is: ${fullName} 
  and I am ${age} years old`;

console.log(myGreeting);

// Appending
let val;
console.log(val);
val = 'John ';
console.log(val);
// val = val + 'Doe';
val += 'Doe';
console.log(val);

// ToUpperCase
let city = 'johannesburg';
console.log(city);
city = city.toUpperCase();
console.log(city);

// ToLowerCase
let town = 'BENONI';
console.log(town);
town = town.toLowerCase();
console.log(town);

// Character at an index in a String
let char = town.charAt(3);
console.log(char);

// Indexes in JS start at 0
// index at 2 => 3rd character
// [0, 1, 2]
let arr = ['one', 'two', 'three'];
console.log('At index 0: ' + arr[0]);
console.log('At index 1: ' + arr[1]);
console.log('At index 2: ' + arr[2]);

let longWord = 'antidisestablishmentariasnism';
// Get a substring from a longer string
console.log(longWord.substring(0, 5));
console.log(longWord.substring(5, 10));
console.log(longWord.substring(10));

// Slice a string
console.log(longWord.slice(0, 5));
console.log(longWord.slice(5));
console.log(longWord.slice(-5));

// includes()
// returns a boolean
// we can use this as a check statement (if statement)
console.log(longWord.includes('a'));

// Template Literals

const name = 'Cameron';
const surname = 'Kirkpatrick';
const howOld = 29;

let html;

html = `
  <ul>
    <li>First Name: ${name}</li>
    <li>Last Name: ${surname}</li>
    <li>I am ${howOld} years old</li>
  </ul>
`;

document.body.innerHTML = html;

// Math Object
// It has methods attached to it

// Eulors Number
console.log(Math.E);
console.log(Math.sqrt(25));

// Comparative Operators

// Equal To
// Greater Than
// Greater Than and Equal To
// Less Than
// Less Than

// Logical Operators
// If Else

// Truthy and Falsey checks

// null is a falsey value
let item = null;
// 0 is a falsey value
item = 0;
// values larger then 0 are truthy
item = 10;
// values smaller then 0 are truthy
item = -10;

if (item) {
  console.log('This must have been true');
} else {
  console.log('This must have been false');
}

if (item > 5) {
  console.log('Something');
} else {
  console.log('Something else');
}

if (item > 5 || item < 5) {
  // execute this
  console.log('ello there');
} else {
  // else execute this
  console.log('goodbye there');
}

let newItem = 'hello';

// ==
// check for value equality
// ===
// check for value and Type equality

if (item < 5 && newItem === 'hello') {
  // execute this
  console.log('ello there');
} else {
  // else execute this
  console.log('goodbye there');
}

// Terniary Operator
// In line if statement

let number = 90;
console.log(number === 100 ? 'Yes it is!' : "No it's not");

let color = 'yellow';

switch (color) {
  case 'red':
    console.log('Color is Red');
    break;
  case 'blue':
    console.log('Color is Blue');
    break;
  case 'yellow':
    console.log('Color is Yellow');
    break;
  default:
    console.log('Color has no match');
    break;
}

// Arrays

let names = ['cam', 'sean', 'mia', 'jenny', 'john'];
console.log(names);
console.log(names[0]);
console.log(names[1]);

// add to the array
names.push('james');
console.log(names);

// pop items off the array
names.pop('james');
console.log(names);

// Higher order functions

// forEach
let newArr1 = names.forEach((name) => {
  console.log(`The name is: ${name}`);
});

// filter
let newArr2 = names.filter((x) => {
  return x !== 'cam';
});
console.log(newArr2);

let newArr3 = names.filter((x) => x !== 'cam');
console.log(newArr3);

let newArr4 = names.filter((x) => x === 'cam');
console.log(newArr4);

let nameFound = names.find((x) => x == 'cam');
console.log(nameFound);

let indexFound = names.findIndex((x) => x == 'cam');
console.log(indexFound);
console.log(names[indexFound]);

// Objects

let person = {
  name: 'Cam',
  surname: 'Kirkpatrick',
  age: 29,
  phoneType: 'Samsung',
  getPhoneType: function () {
    return this.phoneType;
  },
};

// Get all the keys for this object
console.log(Object.keys(person));
const keys = Object.keys(person);

console.log(person);
console.log(person['name']);
console.log(person['surname']);
console.log(person['phoneType']);
// does not execute the function
console.log(person.getPhoneType);
console.log(person.getPhoneType());

// Combine a few things here
// Arrays, Objects & higher order functions

let randomObjectArray = [
  {
    name: 'Cam',
    surname: 'Kirkpatrick',
    goalsScored: 5,
  },
  {
    name: 'Michelle',
    surname: 'Visser',
    goalsScored: 9,
  },
  {
    name: 'John',
    surname: 'Doe',
    goalsScored: 25,
  },
];

console.log(randomObjectArray);

let newRandomArray = randomObjectArray.map((x) => {
  return {
    name: x.name,
    surname: x.surname,
    goalsScored: x.goalsScored + 1,
  };
});

console.log(newRandomArray);

// Looping

// For loop

let distance = 10;
for (let i = 0; i < distance; i++) {
  // execute iside here
  console.log('Our index value is: ' + i);
}

// sheep example
for (let i = 1; i < 6; i++) {
  console.log(`Sheep number: ${i}`);
}

for (let i = 0; i < 5; i++) {
  console.log(`Sheep number: ${i + 1}`);
}

// While loop

let newVal = 0;
while (newVal < 10) {
  console.log('Hey I am inside a while loop ' + newVal);
  newVal += 1;
}

// Functions

function greetMe(name) {
  console.log(`Hello there ${name}`);
}

greetMe;
greetMe();
greetMe('Cameron');

// rule of thumb
// you should accept a max of 3 function parameters
// else rather accept an single entity
function addNumbers(num1, num2) {}

function addFiveNumbers(num1, num2, num3, num4, num5) {}

// let nums = {
//   num1: 0,
//   num2: 0,
//   num3: 0,
//   num4: 0,
//   num5: 0,
// };

function addFiveNumbers(nums) {
  let total = nums[0] + nums[1] + nums[2] + nums[4] + nums[4];
  console.log('Total is: ' + total);
}

addFiveNumbers([2, 5, 8, 23, 78]);

function getSlices(breadName) {
  if (breadName == '') {
    console.log('Whoops, no bread name given');
    return;
  }

  switch (breadName) {
    case 'Albony':
      console.log(`${breadName} sells loafs with 30 slices`);
      break;
    case 'Sasko':
      console.log('Sasko sells loafs with 40 slices');
      break;
    case 'Woolies':
      console.log('Woolies sells loafs with 60 slices');
      break;
    default:
      console.log('No bread company');
      break;
  }
}

getSlices();
getSlices('');
getSlices('Albony');

let todaysDate = new Date();
console.log(todaysDate);

// return the day of the week
// let day = todaysDate.getDay();
// return the day of the month
let day = todaysDate.getDate();
console.log(day);

// getMonth return the month but an index behind
let month = todaysDate.getMonth();
console.log(month + 1);

let year = todaysDate.getFullYear();
console.log(year);

console.log(`${day}/${month}/${year}`);
