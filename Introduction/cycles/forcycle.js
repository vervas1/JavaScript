// for (let i = 0; i < 3; i++) {
//   console.log('dabartine iteracija', i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// kas antra skaiciu atvaizduos

// for (let i = 0; i <= 15; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 3) {
//   console.log([i]);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 4 == 0) {
//     console.log(i);
//   }
// }

// let pradzia = 7;
// let pabaiga = 11;

// for (let i = pradzia; i <= pabaiga; i++) {
//   console.log(i, i * i);
// }
let pradzia = 1;
let pabaiga = 17;

for (let i = pradzia; i <= pabaiga; i++) {
  if (i % 2 != 0 || i % 8 == 0) {
    console.log(i);
  }
}
