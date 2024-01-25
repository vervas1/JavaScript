// let defaultFunk = function () {
//   return 'hello';
// };
// console.log(defaultFunk());

// let arrowFunk = () => {
//   return 'Hello, arrow function';
// };
// console.log(arrowFunk());

// function tekstas() {
//   return 'cia yra tekstas';
// }
// console.log(tekstas());

// function skaiciai() {
//   return Math.round(Math.random() * 10);
// }
// console.log(skaiciai());

// function info(vardas, vidurkis) {
//   return `Studento vardas: ${vardas} ir jo vidurkis ${vidurkis}.  `;
// }
// console.log(info('Tomas', 8.5));
// console.log(info('Ignas', 9.5));

// function funkcija(x, y) {
//   return x + y;
// }
// function suma(x, y) {
//   console.log(`${x} + ${y} = ${funkcija(x, y)}`);
// }

// // let skaicius1 = 5;
// // let skaicius2 = 2;
// // suma(skaicius1, skaicius2);

// suma(5, 4);
// suma(7, 2);

// function skaicius_suma(masyvas) {
//   let suma = 0;
//   for (const sk of masyvas) {
//     suma += sk;
//   }
//   return suma;
// }

// let skaiciai = [1, 9, 10, 1];
// let suma = skaicius_suma(skaiciai);
// let vidurkis = suma / skaiciai.length;

// let skaiciai2 = [2, 4, 9, 9];
// let suma2 = skaicius_suma(skaiciai2);

// console.log(suma);
// console.log(vidurkis);
// console.log(suma2);

// if (suma < suma2) {
//   console.log('Pirmas masyvas didesnis, jo suma =', suma2);
// } else if (suma > suma2) {
//   console.log('antras masyvas didesnis. Jo suma =', suma);
// } else {
//   ('Klaida');
// }

function ilgiausias_zodis(zodziai) {
  console.log(zodziai);
  let igliausias = '';

  for (let i = 0; i < zodziai.length; i++) {
    if (zodziai[i].length > igliausias.length) {
      igliausias = zodziai[i];
    }
  }
  return igliausias;
}

let zodziai = ['aurora', 'medis', 'kriause', 'kompozitorius'];
let zodziai2 = ['aurora', 'medis', 'kriause', 'sveiki'];
let zodziai3 = ['aurora', 'medis', 'kriause', 'programavimas'];
ilgiausias_zodis(zodziai);
ilgiausias_zodis(zodziai2);
ilgiausias_zodis(zodziai3);
