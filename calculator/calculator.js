const loanAmount =  document.getElementById("loan-amount")
const loanYears = document.getElementById("loan-years")
const loanRate = document.getElementById("loan-rate")
const resultSection = document.querySelector('#monthly-payment')
const monthly_disp = document.createElement('div')


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  var valuesObj = {amount: 1000, years: 1, rate: 0.1}
  loanAmount.value = valuesObj.amount
  loanYears.value = valuesObj.years
  loanRate.value = valuesObj.rate
  updateMonthly(calculateMonthlyPayment(valuesObj))
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let newValuesObj = {};
  newValuesObj.amount = loanAmount.value
  newValuesObj.years = loanYears.value
  newValuesObj.rate = loanRate.value
  const monthlyResult = calculateMonthlyPayment(newValuesObj);
  updateMonthly(monthlyResult);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthly_pmt =  (values.amount * (values.rate/12))/(1-((1+(values.rate/12))**(-1*(values.years*12))))
  console.log(monthly_pmt)
  monthly_pmt = (Math.floor(monthly_pmt*100))/100
  console.log(monthly_pmt)
  console.log(monthly_pmt)
  let monthlyString = monthly_pmt.toString();
  return monthlyString;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthly_disp.innerText = monthly
  resultSection.appendChild(monthly_disp)
}
