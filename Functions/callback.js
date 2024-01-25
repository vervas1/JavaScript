// callback - tai funkcija kuri paduodama kaip argumentas (kitaip -parametras) i kita funkcija

// paprastas pavyzdys
// function mainFunction(callback) {
//   callback();
// }

// function anotherFunction() {
//   console.log('another function');
// }

// mainFunction(anotherFunction);

// // pavyzdys nekuriant kitos funkcijos
// mainFunction(function () {
//   console.log('funkcija paduota kaip argumentas be jos kurimo');
// });

// // pavyzdys su arrow function
// mainFunction(() => {
//   console.log('arrow function paduota kaip argumentas be jos kurimo');
// });

// cia tas pats kas kurti nauja kintamaji, priskirti jam reiksme ir tada paduoti kaip argumenta
// arba galime iskarto paduoti pacia reiksme kaip argumenta:

//      let greeting = "labas"
//      myFunction(greeting);
// arba:
//      myFunction("labas")

// pavyzdys su callback funkcija ir for ciklu
// let pazymiai = [10, 2, 8, 6, 4, 7, 9, 1, 3, 5];
// let knygos = ['Brisiaus galas', 'Faustas', 'Amerikos raganos'];
// let saskSumaSuLiekana = [100.23, 200.45, 300.67, 400.89, 500.12];

// for (let i = 0; i < pazymiai.length; i++) {
//   console.log(pazymiai[i]);
// }

// for (let i = 0; i < knygos.length; i++) {
//   console.log('knygos pavadinimas: ', knygos[i]);
// }

// for (let i = 0; i < saskSuma.length; i++) {
//   let suapvalintaSuma = Math.round(saskSuma[i]);
//   console.log(
//     `Saskaitos suma: ${saskSuma[i]}; Suapvalinta suma: ${suapvalintaSuma}`
//   );
// }

// function iteruotiMasyva(masyvas, callback) {
//   // iteruojam per masyva
//   for (let i = 0; i < masyvas.length; i++) {
//     // iskvieciame callback funkcija ir paduodame i ja reiksmes: masyvo item, index ir visa masyva
//     callback(masyvas[i], i, masyvas);
//   }
// }

// iteruotiMasyva(pazymiai, (item) => console.log(item));

// iteruotiMasyva(knygos, function (item, index, arr) {
//   console.log(
//     'knygos pavadinimas: ',
//     item,
//     '/ Eiles numeris: ',
//     index,
//     '/ Visas sarasas yra: ',
//     arr
//   );
// });

// iteruotiMasyva(saskSumaSuLiekana, (item) => {
//   let suapvalintaSuma = Math.round(item);
//   console.log(`Saskaitos suma: ${item}; Suapvalinta suma: ${suapvalintaSuma}`);
// });

// // taip atsirado forEach metodas
// let arr = [2, 3, 5, 7];
// arr.forEach((item) => {
//   console.log(item);
// });

// let arr = [6, 8, 6, 5, 8];
// let arr2 = [5, 8, 2, 1, 8];

// function isPositive(pazymiai) {
//   for (let i = 0; i < pazymiai.length; i++) {
//     if (pazymiai[i] < 5) {
//       // console.log('neigiamas pazymys', pazymiai[i]);
//       return false;
//     }
//   }
//   return true;
// }

// // let atsakymas = isPositive(arr);
// // console.log(atsakymas);
// console.log(isPositive(arr2));
// console.log(isPositive(arr));

// let arr = [6, 8, 6, 5, 8];
// let arr2 = [5, 8, 2, 1, 8];

// function isPositive(pazymiai) {
//   let teigiamas = true;
//   for (let i = 0; i < pazymiai.length; i++) {
//     if (pazymiai[i] < 5) {
//       // console.log('neigiamas pazymys', pazymiai[i]);
//       teigiamas = false;
//       break;
//     }
//   }
//   return teigiamas;
// }

// let atsakymas = isPositive(arr);
// console.log(atsakymas);
// console.log(isPositive(arr2));

// let darbuotojas = {
//   vardas: 'Petras',
//   Paverde: 'Petraitis',
//   atlyginimas: 1000,
//   etatas: 'Pilnas',
//   procentai: function (num, per) {
//     return (num/100)* per;
//   }
// };
