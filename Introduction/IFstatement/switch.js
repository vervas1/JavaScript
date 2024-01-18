// let ticket = 20;
// switch (ticket) {
//   case 1:
//     console.log('laimejo vandens');
//     break;

//   case 2:
//     console.log('laimejo limonada');
//     break;

//   case 3:
//     console.log('laimejo arbata');
//     break;

//   case 4:
//     console.log('laimejo kava');
//     break;
//   default:
//     console.log('nera');
//     break;
// }

// let x = 9;
// let y = 7;
// let z = 3;

// switch (x) {
//   case 1:
//     let sum = x + y + z;
//     console.log(sum);
//     break;

//   case 2:
//     let sandauga = y * z;
//     console.log(sandauga);
//     break;

//   case 3:
//     let kvadratas = x * x;
//     console.log(kvadratas);
//     break;

//   default:
//     console.log('konsole');
//     break;
// }

// let klaida = 'b';
// switch (klaida) {
//   case 'a':
//     console.log('klaida pirma');
//     break;

//   case 'b':
//     console.log('klaida antra');
//     break;

//   case 'c':
//     console.log('klaida trecia');
//     break;

//   default:
//     console.log('nera');
//     break;
// }

let x = 8;
let darbperval = 5;
let darbuotojai = 3;
let savikaina = 1.5;
let pardavimas = 3;
let uzsakymas = 550;
let perdiena = x * darbperval * darbuotojai;
console.log(
  'Kepykla per vieną darbo dieną spės iškepti duonos kepalų.',
  perdiena
);
let kepalusavikaina = perdiena * savikaina;
console.log('Visų kepalų savikainą:', kepalusavikaina);
let pajamos = perdiena * pardavimas;
console.log('Pajamos:', pajamos);
let pelnas = pajamos - kepalusavikaina;
console.log('Pelnas:', pelnas);

if (perdiena >= uzsakymas) {
  console.log('spes iskepti');
} else if (perdiena < uzsakymas) {
  console.log('nespes iskepti nes truksta', uzsakymas - perdiena, 'kepiniu');
}

// let norma = 90;
// switch (norma) {
//   case 120:
//     console.log('norma pasiekta');

//     break;

//   case 100:
//     console.log('truksta 20vnt');
//     break;

//   case 90:
//     console.log('truksta 30vnt');
//     break;
// }
