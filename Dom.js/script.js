let calculateButton = document.getElementById('calculate');
// calculateButton.disabled = false;
// console.log(calculateButton.disabled);
calculateButton.addEventListener('click', function () {
  //   console.log('clicked');
  let employeesCount = document.getElementById('employees-count').value;
  let employeeMakesPerDay = document.getElementById(
    'employee-makes-per-day'
  ).value;
  let dayReservations = document.getElementById('day-reservations').value;

  let bakeryTotal = employeesCount * employeeMakesPerDay;
  let BakeryOnTime = bakeryTotal >= dayReservations;

  let ResultsDiv = document.getElementById('results');
  // console.log(ResultsDiv);
  ResultsDiv.innerHTML = `<p> Kepykla per diena pagamins: ${bakeryTotal} vnt kepalu </p>`;
  // dadeda prie esamos informacijos dar papildoma info
  ResultsDiv.innerHTML += `<p> Jai reikia speti pagaminti: ${dayReservations} vnt kepalu </p>`;
  ResultsDiv.innerHTML += `<p> Ar spes kepykla?  ${
    BakeryOnTime ? 'Taip' : 'Ne'
  } </p>`;
});

// Kad javascript patikrintu inputa employees-count ar jame yra klaidu ar ne. Key up - kai bus paspaustas ir atleistas mygtukas.
// Function event - naudojam kad butu galima daugiau info isgauti
let inputValue1;
document
  .getElementById('employees-count')
  .addEventListener('change', function (event) {
    inputValue1 = event.target.valueAsNumber;

    // rasom salyga kad inputo skaicius negali buti mazesnis negu 0
    if (inputValue1 < 0) {
      // Jeigu bus bloga reiksme, ijungsime errora
      event.target.classList.add('error');
      event.target.nextElementSibling.classList.add('show');
    } else {
      // jeigu bus gera reiksme - isjungsime errora
      event.target.classList.remove('error');

      event.target.nextElementSibling.classList.remove('show');
    }
    disabledButtonCalculate();
  });
let inputValue2;
document
  .getElementById('employee-makes-per-day')
  .addEventListener('change', function (event) {
    inputValue2 = event.target.valueAsNumber;
    // rasom salyga kad inputo skaicius negali buti mazesnis negu 0
    if (inputValue2 < 0) {
      // Jeigu bus bloga reiksme, ijungsime errora
      event.target.classList.add('error1');
      event.target.nextElementSibling.classList.add('show');
    } else {
      // jeigu bus gera reiksme - isjungsime errora
      event.target.classList.remove('error1');
      event.target.nextElementSibling.classList.remove('show');
    }
    disabledButtonCalculate();
  });

let inputValue3;
document
  .getElementById('day-reservations')
  .addEventListener('change', function (event) {
    inputValue3 = event.target.valueAsNumber;
    // rasom salyga kad inputo skaicius negali buti mazesnis negu 0
    if (inputValue3 < 0) {
      // Jeigu bus bloga reiksme, ijungsime errora
      event.target.classList.add('error2');
      event.target.nextElementSibling.classList.add('show');
    } else {
      // jeigu bus gera reiksme - isjungsime errora
      event.target.classList.remove('error2');
      event.target.nextElementSibling.classList.remove('show');
    }
    disabledButtonCalculate();
  });

// isjungia mygtuka calculate kai nera reiksmiu
function disabledButtonCalculate() {
  // console.log('trigger');
  if (inputValue1 > 0 && inputValue2 > 0 && inputValue3 > 0) {
    calculateButton.disabled = false;
  } else {
    calculateButton.disabled = true;
  }
}

// nunulina visus parametrus paspaudus mygtuka istrinti
document.getElementById('reset').addEventListener('click', function () {
  document.getElementById('employees-count').value = 0;
  document.getElementById('employee-makes-per-day').value = 0;
  document.getElementById('day-reservations').value = 0;
  document.getElementById('results').innerHTML = '<p>Iveskite duomenys</p>';
});
