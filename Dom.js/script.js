let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
  //   console.log('clicked');
  let employeesCount = document.getElementById('employees-count').value;
  let employeeMakesPerDay = document.getElementById(
    'employee-makes-per-day'
  ).value;
  let dayReservations = document.getElementById('day-reservations').value;

  let bakeryTotal = employeesCount * employeeMakesPerDay;
  let BakeryOnTime = bakeryTotal >= dayReservations;

  //   let logInfo = {
  //     bakeryTotal,
  //     BakeryOnTime,
  //   };
  //   console.log(logInfo);

  //   console.log('employees count', employeesCount);
  //   console.log('employee makes per day', employeeMakesPerDay);
  //   console.log('day reservations', dayReservations);

  let ResultsDiv = document.getElementById('results');
  //   console.log(ResultsDiv);
  ResultsDiv.innerHTML = 'naujas contentas';
});
