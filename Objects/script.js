// let student = {
//   vardas: 'Veronika',
//   kursas: 'Java',
//   metai: 2023,
//   sodra: true,
// };

// student.kursas = 'Node.js';
// console.log(student.metai);
// console.log(student);

// let studentas = {
//   vardas: 'Veronika',
//   pavarde: 'Vasiliauske',
//   amzius: 20,
//   ugis: 165,
//   kursas: 'Java',
//   mokykla: 'VDU',
// };
// console.log(studentas);

// console.log(studentas.vardas);
// console.log(studentas.amzius);
// console.log(studentas.mokykla);

// task2

// let movie = {
//   Name: 'Barbie',
//   Producer: 'Margot Robbie',
//   Budget: 128,
//   Earned: 250,
//   Release: 2022,
//   Actors: ['Margot Robbie', 'Ryan Gosling', 'Will Ferrell'],
// };
// console.log(movie);

// // filmo pelnas

// console.log('Pelnas', movie.Earned - movie.Budget);

// // aktorius skaicius
// console.log('Filme dalyvavo', movie.Actors.length, 'aktoriai');

// console.log(new Date(Date.now()).getFullYear() - movie.Release);

// task3
// let book1 = {
//   name: 'book1',
//   autorius: 'Petras',
//   Zanras: 'Siaubo',
//   Puslapiu: 20,
//   Kaina: 6,
// };
// let book2 = {
//   name: 'book2',
//   autorius: 'Andrius',
//   Zanras: 'Siaubo',
//   Puslapiu: 10,
//   Kaina: 4,
// };
// console.log(book1);
// console.log(book2);
// if (book1.Puslapiu > book2.Puslapiu) {
//   console.log('antra knyga plonesne');
// } else if (book1.Puslapiu < book2.Puslapiu) {
//   console.log('pirma knyga plonesne');
// } else {
//   console.log('vienodas puslapiu skaicius');
// }

// if (book1.Kaina * 2 > book2.Kaina) {
//   console.log('pirma knyga butu brangesne');
// } else {
//   console.log('ne');
// }

// let object1 = {
//   pavadinimas: 'knyga',
//   kaina: 5,
//   savikaina: 2,
//   kodas: 125,
//   sandelyje: 4,
//   matmenys: [10, 12, 15],
// };
// let object2 = {
//   pavadinimas: 'lempa',
//   kaina: 6,
//   savikaina: 1,
//   kodas: 175,
//   sandelyje: 2,
//   matmenys: [5, 2, 15],
// };
// let object3 = {
//   pavadinimas: 'laptopas',
//   kaina: 20,
//   savikaina: 10,
//   kodas: 35,
//   sandelyje: 6,
//   matmenys: [12, 12, 16],
// };
// console.log(object1, object2, object3);
// console.log(
//   'Pirmos prekes kaina',
//   object1.kaina,
//   'Antros prekes kaina',
//   object2.kaina,
//   'Trecios prekes kaina',
//   object3.kaina
// );

// if (object1.kaina > object2.kaina) {
//   console.log(object1);
// } else if (object3.kaina > object2.kaina) {
//   console.log(object3);
// } else {
//   console.log(object2);
// }

// console.log(object1.matmenys);
// console.log(object2.matmenys);
// console.log(object3.matmenys);

// console.log(
//   'Pelningumas object1',
//   (object1.kaina - object1.savikaina) * object1.sandelyje
// );
// console.log(
//   'Pelningumas object2',
//   (object2.kaina - object2.savikaina) * object2.sandelyje
// );
// console.log(
//   'Pelningumas object3',
//   (object3.kaina - object3.savikaina) * object3.sandelyje
// );

// task5
// let tuscias = {};
// let car = {
//   marke: 'BMW',
//   Modelis: 'F15',
//   Rida: 120000,
//   Metai: 2017,
//   Spalva: 'Juoda',
//   Turis: 5,
//   Dauzta: false,
//   Parduodama: false,
// };
// console.log(car);
// console.log(
//   'Automobiliui',
//   new Date(Date.now()).getFullYear() - car.Metai,
//   'metai'
// );
// console.log(
//   'vidutiniskai nuvaziuoja per metus',
//   car.Rida / (new Date(Date.now()).getFullYear() - car.Metai),
//   'km'
// );

// task1
// let knyginas = {
//   pavadinimas: 'pegasas',
//   adresas: 'Baltijos pr.2',
//   plotas: 20,
//   knygu: 70,
//   darbolaikas: {
//     nuo: 9,
//     iki: 18,
//   },
//   atidarytas: true,
// };
// console.log(knyginas);

// for (const knyga in knyginas) {
//   if (typeof knyginas[knyga] !== 'string') {
//     console.log(knyga, knyginas[knyga]);
//   }
// }

// task2
// let student1 = {
//   Vardas: 'Jonas Jonaitis',
//   Pazymiai: [5, 6, 1],
// };
// let student2 = {
//   Vardas: 'Petras Petraitis',
//   Pazymiai: [1, 3, 5],
// };
// console.log(student1);
// console.log(student2);

// let paz_sum1 = 0;
// for (const pazymis of student1.Pazymiai) {
//   paz_sum1 += pazymis;
// }
// console.log(paz_sum1 / student1.Pazymiai.length);

// let paz_sum2 = 0;
// for (const pazymis of student2.Pazymiai) {
//   paz_sum2 += pazymis;
// }
// console.log(paz_sum2 / student2.Pazymiai.length);

// if (paz_sum1 / student1.Pazymiai.length > paz_sum2 / student2.Pazymiai.length) {
//   console.log(student1, 'vidurkis', paz_sum1 / student1.Pazymiai.length);
// } else {
//   console.log(student2, 'vidurkis', paz_sum2 / student2.Pazymiai.length);
// }

// Pask12 task1
// let knygos = [
//   { pavadinimas: 'begliai', kaina: 12, autorius: 'Jonas Jonaitis' },
//   { pavadinimas: 'kultura', kaina: 5, autorius: 'Petras Petraitis' },
//   { pavadinimas: 'gyvunai', kaina: 8, autorius: 'Ignas Ignauskas' },
// ];

// console.log('Visos knygos', knygos);
// console.log('Pirmos knygos info', knygos[0]);
// console.log('Antros knygos kaina', knygos[1].kaina);

// task2
// let prekes = [
//   { pavadinimas: 'lempa', spalva: 'raudona', kaina: 8 },
//   { pavadinimas: 'sofa', spalva: 'balta', kaina: 108 },
//   { pavadinimas: 'pagalve', spalva: 'geltona', kaina: 2 },
// ];
// console.log('prekiu info');
// for (const preke of prekes) {
//   console.log(` - Preke: ${preke.pavadinimas} , Kaina ${preke.kaina} Eur`);
// }

// taks3
// let cars = [
//   { pavadinimas: 'BMW', metai: 2019 },
//   { pavadinimas: 'Audi', metai: 2015 },
//   { pavadinimas: 'Ford', metai: 2014 },
// ];
// console.log('Automobiliai:');
// for (const car of cars) {
//   console.log(
//     `Automobilis: ${car.pavadinimas} ,gamybos metai: ${car.metai}, azmius ${
//       new Date(Date.now()).getFullYear() - car.metai
//     }`
//   );
// }

// taks4
// let sokoladas = [
//   { pavadinimas: 'Snickers', kaina: 1, keikis: 10 },
//   { pavadinimas: 'Mars', kaina: 2, keikis: 8 },
//   { pavadinimas: 'Bounty', kaina: 3, keikis: 5 },
// ];
// let kainu_suma = 0;
// let kiekio_suma = 0;
// console.log('Asortimentas:');
// for (const sokolad of sokoladas) {
//   kainu_suma += sokolad.kaina;
//   kiekio_suma += sokolad.keikis;
//   console.log(sokolad.pavadinimas, 'kainuoja siandien', sokolad.kaina, 'Eur');
// }
// console.log('Sokoladu tipu yra:', sokoladas.length);
// console.log('Bendra prekiu suma', kainu_suma, 'Eur');
// console.log('Bendras kiekis', kiekio_suma, 'vnt');

// task5
let studentai = [
  { vardas: 'Ignas', amzius: 19, pazymiai: [5, 4, 2, 1] },
  { vardas: 'Petras', amzius: 20, pazymiai: [7, 3, 5, 9] },
  { vardas: 'Jonas', amzius: 21, pazymiai: [3, 7, 10, 8] },
];
// sukurem kintamaji kad apskaiciuoti vidurkiu vidurki
let vidurkiu_suma = 0;

// ciklas skaiciuoja kekvieno studento vidurki
for (const stud of studentai) {
  console.log(`studentas ${stud.vardas}, Amzius: ${stud.amzius}`);

  let suma = 0;
  for (const paz of stud.pazymiai) {
    suma += paz;
  }

  let vidurkis = suma / stud.pazymiai.length;
  vidurkiu_suma += vidurkis;

  console.log('Jo vidurkis', vidurkis);
}
// baigia skaiciuoti vidurki kekvieno studento

let vidurkiu_vidurkis = vidurkiu_suma / studentai.length;
console.log(vidurkiu_vidurkis);
