let arr = [2, 3, 5, 7];

let numberToFind = 2;

// inlcudes metodas grazina true arba false
let includesResult = arr.includes(numberToFind);
// masyvo indexOf metodas grazina indeksa pagal nurodyta reiksme

if (includesResult) {
  let indexOfResult = arr.indexOf(numberToFind);
  console.log('rastas:', includesResult);
  console.log('skaiciaus indeksas:', indexOfResult);
} else {
  console.log(`skaicius ${numberToFind} nerastas`);
}

// sort
console.log('===================== sort metodas =====================');

let numbers = [2, 3, 5, 7, 1, 4, 6, 9, 8];

numbers.sort();
console.log('original numbers', numbers);

// every && some
console.log(
  '===================== every && some metodai ====================='
);
let pazymiai = [10, 8, 6, 7, 9, 4, 5];

// tikrina ar visi pazymiai atitinka salyga
let pazymiaiTeigiami = pazymiai.every((pazymys) => {
  return pazymys > 4;
});

console.log(
  pazymiaiTeigiami ? 'visi pazymiai teigiami' : 'yra neigiamu pazymiu'
);

// tikrina ar bent vienas pazymys atitinka salyga
let bentVienasNeigiamas = pazymiai.some((pazymys) => {
  return pazymys <= 4;
});

console.log(
  bentVienasNeigiamas ? 'yra bent vienas neigiamas pazymys' : 'visi teigiami'
);

// find
console.log('===================== find metodas =====================');
let names = ['Jonas', 'Petras', 'Antanas', 'Povilas', 'Rasa', 'Ona'];

let result = names.find((name) => {
  return name === 'Povilasss';
});

// console.log(result);

let arrayOfStudents = [
  { name: 'Jonas', age: 99 },
  { name: 'Petras', age: 88 },
  { name: 'Antanas', age: 77 },
  { name: 'Povilas', age: 66 },
  { name: 'Rasa', age: 55 },
  { name: 'Ona', age: 44 },
];

let myStudent = arrayOfStudents.find((student) => {
  return student.age < 70;
});

console.log(myStudent);

// filter
console.log('===================== filter metodas =====================');

let allYoungStudents = arrayOfStudents.filter((student) => {
  return student.age < 70;
});

console.log(allYoungStudents);

// forEach
console.log('===================== forEach metodas =====================');

let fruits = ['orange', 'apple', 'banana', 'pear'];

fruits.forEach((item, ind, arr) => {
  console.log('my fruit:', item, 'with index:', ind, 'all fruitus:', arr);
});

// map
console.log('===================== map metodas =====================');
let guestsNames = ['Jonas', 'Petras', 'Antanas', 'Povilas', 'Rasa', 'Ona'];

let guestsWithGreetings = guestsNames.map((oneGuest) => {
  return `Gerb. ${oneGuest}`;
});

console.log(guestsWithGreetings);
