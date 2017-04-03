'use strict';

var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
  if (rate) {
    var monthlyRate = rate / 100 / 12;
  }
  var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return monthlyPayment;
};

var classname = document.getElementsByClassName("symbol");
Array.from(classname).forEach(function (element) {
  element.addEventListener('click', function () {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var symbol = element.getAttribute("symbol");

    document.getElementById("total").innerHTML = calculate(number1, number2, symbol);
  });
});

var calculate = function calculate() {
  var num1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var symbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "PLUS";

  var valueCalulate = 0;

  if (symbol == "PLUS") {
    valueCalulate = +num1 + +num2;
  } else if (symbol == "MINUS") {
    valueCalulate = num1 - num2;
  } else {
    valueCalulate = num1 * num2;
  }

  return valueCalulate;
};
