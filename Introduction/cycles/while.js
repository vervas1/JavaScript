// let ciklai = 0;

// while (ciklai < 5) {
//   console.log('dabartinis ciklas:', ciklai);
//   ciklai = ciklai + 1;
// }

// let i = 1;
// while (i < 20) {
//   i++;
//   console.log(i);
// }

// let i = 1;
// while (i < 10) {
//   if (i % 2 === 0) {
//     console.log('lyginis');
//   }
//   if (i % 2 !== 0) {
//     console.log('nelyginis');
//   }
//   i++;
// }

// let i = 25;
// while (i < 50) {
//   i++;
//   if (i % 3 === 0) {
//     console.log('skaicius', i, 'dalinasi is 3');
//   }
// }

// let i = 1;
// while (true) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//     break;
//   }

//   i++;
// }

// Raskite visu lyginiu skaiciu suma
// let i = 1;
// let sum = 0;

// while (i <= 100) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
//   i++;
// }
// console.log(sum);

// let skaicius = 1;
// while (skaicius < 5) {
//   console.log(skaicius, skaicius * skaicius);
//   skaicius++;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(Math.round(Math.random() * 10));

// }
// let i = 1;
// let sum = 0;
// while (i <= 5) {
//   let random = Math.round(Math.random() * 10);
//   console.log(random);
//   sum = sum + random;
//   i++;
// }
// console.log('suma', sum);

let lempos = 5;
let kvepalai = 4;
let atvirukai = 3;
while (lempos > 0 || kvepalai > 0 || atvirukai > 0) {
  console.log(
    'prekes sandelyje - ',
    'lempos:',
    lempos,
    ',kvepalai:',
    kvepalai,
    ',atvirukai',
    atvirukai
  );

  let nupirko_lempos = Math.ceil(Math.random() * lempos);
  let nupirko_kvepalai = Math.ceil(Math.random() * kvepalai);
  let nupirko_atvirukai = Math.ceil(Math.random() * atvirukai);
  console.log(
    'nupirko lempu',
    nupirko_lempos,
    'nupirko kvepalu',
    nupirko_kvepalai,
    'nupirko atviruku',
    nupirko_atvirukai
  );
  if (lempos) lempos -= nupirko_lempos;
  if (kvepalai) kvepalai -= nupirko_kvepalai;
  if (atvirukai) atvirukai -= nupirko_atvirukai;
}
