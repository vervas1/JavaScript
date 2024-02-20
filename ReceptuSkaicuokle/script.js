let porcijos = 1;
let pasirinktasPatiekalas = '';

let porcijuKiekis = document.getElementById('porcijos');
porcijuKiekis.addEventListener('change', function () {
  console.log(porcijuKiekis.valueAsNumber);
  porcijos = porcijuKiekis.valueAsNumber;
  if (pasirinktasPatiekalas === 'chicken') {
    parodykVistiena();
  } else if (pasirinktasPatiekalas === 'tortas') {
    parodykTorta();
  } else if (pasirinktasPatiekalas === 'makaronai') {
    parodykMakaronai();
  }
});

let vistiena = document.getElementById('vistiena');
vistiena.addEventListener('click', function () {
  pasirinktasPatiekalas = 'chicken';
  parodykVistiena();
});

let tortas = document.getElementById('tortas');
tortas.addEventListener('click', function () {
  pasirinktasPatiekalas = 'tortas';
  parodykTorta();
});

let makaronai = document.getElementById('makaronai');
makaronai.addEventListener('click', function () {
  pasirinktasPatiekalas = 'makaronai';
  parodykMakaronai();
});

function parodykVistiena() {
  let results = document.getElementById('rezultatai');
  let miltai = 100;
  let curkus = 20;
  let kiausiniai = 1;
  results.innerHTML = `<p> Miltai: ${miltai * porcijos} g </p>`;
  results.innerHTML += `<p> Cukrus: ${curkus * porcijos} g </p>`;
  results.innerHTML += `<p> Kiausiniai: ${kiausiniai * porcijos} vnt </p>`;
}

let parodykTorta = () => {
  let results = document.getElementById('rezultatai');
  let melynes = 5;
  let druska = 2;
  let milteliai = 1;

  results.innerHTML = `<p> Melynes: ${melynes * porcijos} vnt </p>`;
  results.innerHTML += `<p> Druska: ${druska * porcijos} g </p>`;
  results.innerHTML += `<p> Milteliai: ${milteliai * porcijos} g </p>`;
};
let parodykMakaronai = () => {
  let results = document.getElementById('rezultatai');
  let makaronai = 200;
  let druska = 2;
  let mesa = 500;

  results.innerHTML = `<p> Makaronai: ${makaronai * porcijos} g </p>`;
  results.innerHTML += `<p> Druska: ${druska * porcijos} g </p>`;
  results.innerHTML += `<p> Mesa: ${mesa * porcijos} g </p>`;
};
