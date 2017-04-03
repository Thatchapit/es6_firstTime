var calculateMonthlyPayment = function (principal, years, rate) {
    if (rate) {
        var monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

var classname= document.getElementsByClassName("symbol");
Array.from(classname).forEach(function(element) {
   element.addEventListener('click', () => {
     let number1 = document.getElementById('number1').value;
     let number2 = document.getElementById('number2').value;
     let symbol = element.getAttribute("symbol");

       document.getElementById("total").innerHTML = calculate(number1,number2,symbol);
   });
 });

var calculate = (num1=0,num2=0,symbol="PLUS") => {
  let valueCalulate = 0;

  if(symbol == "PLUS"){
    valueCalulate = +num1 + +num2;
  }else if(symbol == "MINUS"){
   valueCalulate = num1 - num2;
  }else{
      valueCalulate = num1 * num2;
  }

  return valueCalulate;
};
