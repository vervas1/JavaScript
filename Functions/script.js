// function veiksmas(x, y) {
//   console.log(x + y);
// }

// veiksmas(6, 3);
// veiksmas(5, 5);
// veiksmas(1, 2);

// function veiksmas() {
//   console.log('Veronika');
//   console.log('Vasiliauske');
// }

// veiksmas();
// veiksmas();
// veiksmas();

// function veiksmas() {
//   console.log(
//     'Eilerastis \n, Eilerastis2, Eilerastis3, Eilerastis4,Eilerastis2'
//   );
// }
// // ciklas sukurta skad 5 kartus isvestu i console.log
// for (let i = 0; i < 5; i++) {
//   veiksmas();
// }

// function daiktas() {
//   console.log('vienas');
// }
// function daikta() {
//   console.log('du');
// }
// function daikts() {
//   console.log('trys');
// }
// daiktas();
// daikta();
// daikts();

// function daiktas() {
//   console.log('vienas');
// }
// function daikta() {
//   console.log('du');
// }
// function daikts() {
//   daiktas();
//   daikta();
// }

// daikts();

// function veiksmas(x, y) {
//   console.log(x + y);
// }
// veiksmas(5, 3);

// function policininkas() {
//   let name = 'Petras';
//   console.log(name);
//   let pavarde = 'Petraitis';
//   console.log(pavarde);

//   let amzius = 25;
//   console.log(amzius);
//   let alga = 100;
//   console.log(alga);
// }

// policininkas();

// function skaiciai() {
//   let skaiciai = Math.random() * 10;
//   console.log(skaiciai);
// }
// for (let i = 0; i < 5; i++) {
//   skaiciai();
// }

// function sveiki(vardas) {
//   console.log('labas', vardas);
// }
// sveiki('Tomas');

// function viso(vardas) {
//   console.log('viso gero,', vardas);
// }
// viso('Ignas');

// let vardas = 'Petras';

// sveiki('Petras');
// viso('Pertas');

// isveda didziausia skaiciu
// function skaiciai() {
//   console.log(Math.max(8, 9));
// }
// skaiciai();

// function auto(marke, modelis, metai) {
//   console.log('marke', marke);
//   console.log('modelis', modelis);
//   console.log('metai', metai);
//   console.log();
// }
// auto('bmw', 'f15', 2019);
// auto('audi', 'a6', 2018);

// function suma(a, b) {
//   console.log(`${a} + ${b} = ${a + b}`);
// }

// suma(2, 3);

// function skirtumas(a, b) {
//   console.log(`${a} - ${b} = ${a - b}`);
// }

// skirtumas(5, 3);

// function sandauga(a, b) {
//   console.log(`${a} * ${b} = ${a * b}`);
// }

// sandauga(5, 3);

// let atst1 = Math.floor(Math.random() * 10 + 1);
// let atst2 = Math.floor(Math.random() * 8 + 1);

// suma(atst1, atst2);
// sandauga(atst1, atst2);

function funk(zodziai) {
  console.log(zodziai);
  for (let i = 0; i < zodziai.length; i++) {
    console.log(zodziai[i].length);
  }
}
funk(['zodis1', 'zodzis2', 'zodis3']);
