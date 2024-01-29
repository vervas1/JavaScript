let message =
  'Lorem Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Lorem';
let lookingFor = 'l';
let includesResult = message.includes(lookingFor); // sitas metodas grazina true arba false
let indexOfResult = message.indexOf(lookingFor); // sitas metodas grazina indeksa, kuriame prasideda nurodytas tekstas

let newMessage = message.replaceAll('Lorem', 'Labas');

console.log('length:', message.length);
console.log(`looking for '${lookingFor}' in string:`);
console.log(`inlcudes: ${includesResult}`);
console.log('indexOf:', indexOfResult);

console.log('replace:', newMessage);
console.log('original:', message);

console.log(message.toUpperCase());
console.log(message.toLowerCase());

let trimMessage = '   ';

if (trimMessage.trim()) console.log('tekstas yra');

// split && join
console.log(
  '===================== split && join metodai ====================='
);
let stringToSplit = 'Labas rytas, Lietuva, 2024';
//      ['Labas rytas', 'Lietuva', '2024'] => Labas rytas! Lietuva! 2024
let result = stringToSplit.split(',').join('!');
console.log(result);
