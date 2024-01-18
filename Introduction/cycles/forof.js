// let animals = ['cat', 'dog', 'bird', 'mouse'];

// pasiekia tik reiksme (pavadinima)
// for (let value of animals) {
//   console.log(value);
// }

// for in (objektams skirtas)
// for (let value in animals) {
//   console.log(value);
// }

// let animals = ['cat', 'dog', 'horse', 'goat'];
// for (const indeksas in animals) {
//   console.log('indeksas:', indeksas, 'animal:', animals[indeksas]);
// }

// task 18

// let list = ['bread', 'milk', 'eggs', 'water'];
// console.log('nr of items on the list:', list.length);
// for (const items of list) {
//   console.log('-', items);
// }

// task 19
// suma skaiciu
// let grades = [2, 3, 5, 4, 1];
// let sum = 0;
// for (const gr of grades) {
//   sum += gr;
// }

// console.log(sum);

// console.log(sum / grades.length);
// console.log(grades);

// let makes = ['bmw', 'audi', 'ford', 'vw'];
// // isveda pavadinimus i stulpeli
// for (const marke in makes) {
//   console.log(makes[marke]);
// }
// // isveda marke ir suskaiciuja raidziu skaiciu
// for (let marke of makes) {
//   console.log(marke, marke.length);
// }

// task26

// let first_student = [4, 4, 8];
// console.log('pirmo studento balai: ', first_student);
// let second_student = [2, 9, 8];
// console.log('antro studento balai: ', second_student);
// let sum1 = 0;
// for (const fs of first_student) {
//   sum1 += fs;
// }
// let sum2 = 0;
// for (const ss of second_student) {
//   sum2 += ss;
// }
// console.log('pirmo vidurkis', sum1 / first_student.length);
// console.log('antro vidurkis', sum2 / second_student.length);

// if (sum1 / first_student.length > sum2 / second_student.length) {
//   console.log('pirmo studento vidurkis didesnis');
// } else {
//   console.log('antro studento vidurkis didesnis');
// }

// task 27
let folder = ['skandinavija', 'egle', 'ir', 'tuja', 'elementas'];

let trumpi = [];

for (let fol of folder) {
  if (fol.length < 5) {
    trumpi.push(fol);
  }
  console.log(fol);
}
console.log(trumpi);
