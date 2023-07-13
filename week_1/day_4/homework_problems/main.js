console.log('Connected and ready!');

function printEven(until) {
  let arr = [];
  for (let i = 0; i < until + 1; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  console.log('Even Numbers: ' + arr);
}

printEven(20);

function printOdd(until) {
  let arr = [];
  for (let i = 0; i < until; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  console.log('Even Numbers: ' + arr);
}

printOdd(20);

// 0, 0, 1, 2, 3, 5, 8, 13

function printFibonacci(until) {
  let num1 = 0;
  let num2 = 1;
  let arr = [0, 1];
  for (let i = 0; i, i < until; i++) {
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
    arr.push(next);
  }
  console.log('Fibonacci: ' + arr);
}

printFibonacci(10);

function arrayAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log('Array Average: ' + total / arr.length);
}

arrayAverage([2, 4, 7, 34, 64, 4]);

// The spread (...) syntax allows an iterable, such as an array or string,
// to be expanded in places where zero or more arguments
// (for function calls) or elements (for array literals) are expected.

function printMax(arr) {
  console.log('Array Max: ' + Math.max(...arr));
}

printMax([1, 5, 8, 57]);

function printMin(arr) {
  console.log('Array Max: ' + Math.min(...arr));
}

printMin([1, 5, 8, 57]);

function numberOfVowels(word) {
  let arr = Array.from(word);
  let arr2 = arr.filter((x) => 'aeiou'.includes(x));
  console.log(`Number of Vowels in ${word} is ` + arr2.length);
}

numberOfVowels('Cameron');

function addTwoNumbers(num1, num2) {
  let total = num1 + num2;
  console.log('Addition of two number = ' + total);
}

addTwoNumbers(5, 5);

function multiplyTwoNumbers(num1, num2) {
  let total = num1 * num2;
  console.log('Addition of two number = ' + total);
}

multiplyTwoNumbers(5, 5);

function returnPostalCode(city) {
  switch (city) {
    case 'johannesburg':
      console.log('Postal Code: ' + 1501);
      break;
    case 'cape town':
      console.log('Postal Code: ' + 3201);
      break;
    default:
      console.log('No city matches ');
      break;
  }
}

returnPostalCode('johannesburg');

function sortAlphabetically(arr) {
  let arr2 = arr.sort((a, b) => a.localeCompare(b));
  console.log('Alphabetised List: ' + arr2);
}

sortAlphabetically(['cam', 'john', 'dan', 'aaron']);

function sortNumerically(arr, order) {
  if (order === 'ASC') {
    let arr2 = arr.sort((a, b) => a - b);
    console.log('Ascending List: ' + arr2);
  } else {
    let arr2 = arr.sort((a, b) => b - a);
    console.log('Descending List: ' + arr2);
  }
}

sortNumerically([3, 6, 2, 8, 34, 5, 6], 'ASC');
sortNumerically([3, 6, 2, 8, 34, 5, 6], 'DESC');

function reverseNumber(number) {
  let stringNumber = number.toString();
  let reversed = stringNumber.split('').reverse().join('');
  console.log('Reversed NUmber: ' + reversed);
}

reverseNumber(1234);

function capitalizeSentence(sentence) {
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  let completeSentence = '';
  for (let i = 0; i < arr.length; i++) {
    completeSentence += ' ' + arr[i];
  }
  console.log('Capitalized sentence: ' + completeSentence);
}

capitalizeSentence('hello i am a sentence');

function returnOccurances(word, letter) {
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      total += 1;
    }
  }
  console.log(`Total occurances of the letter ${letter} is ${total}`);
}

returnOccurances('because', 'e');

function filterByWord(arr, word) {
  let filteredArr = arr.filter((x) => x !== word);
  console.log('Filtered array: ' + filteredArr);
}

filterByWord(['cam', 'jess', 'james'], 'cam');

function filterByNumber(arr, number) {
  let filteredArr = arr.filter((x) => x !== number);
  console.log('Filtered array: ' + filteredArr);
}

filterByNumber([0, 1, 2, 3, 4, 5, 6, 7], 3);

let objArr = [
  {
    id: 0,
    name: 'Cameron',
    goals: 10,
  },
  {
    id: 1,
    name: 'Jess',
    goals: 15,
  },
  {
    id: 2,
    name: 'Max',
    goals: 45,
  },
];

function filterById(arr, id) {
  let filteredArr = arr.filter((x) => x.id !== id);
  console.log('Filtered array: ');
  console.log(filteredArr);
}

filterById(objArr, 1);

function findById(arr, id) {
  let filteredArr = arr.filter((x) => x.id === id);
  console.log('Filtered array: ');
  console.log(filteredArr);
}

findById(objArr, 2);

function todaysDate() {
  let now = new Date();
  let day = now.getUTCDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  console.log('Todays date: ' + day + '/' + (month + 1) + '/' + year);
}

todaysDate();

function filterByLargerThenTen(arr, val) {
  let filteredArr = arr.filter((x) => x.goals > val);
  console.log('Filtered array: ');
  console.log(filteredArr);
}

filterByLargerThenTen(objArr, 10);
