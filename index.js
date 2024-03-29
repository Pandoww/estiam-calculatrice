function validateInput(input) {

  if (input.value.trim() === '' || isNaN(input.value)) {
      input.setCustomValidity("Please enter a valid number");
  } else {
      input.setCustomValidity("");
  }
}

function addition() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').value = num1 + num2;
}

function subtraction() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').value = num1 - num2;
}

function multiplication() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').value = num1 * num2;
}

function division() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  if (num2 !== 0) {
      document.getElementById('result').value = num1 / num2;
  } else {
      document.getElementById('result').value = "Cannot divide by zero";
  }
}

function clearFields() {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  document.getElementById('result').value = "";
}
