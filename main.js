let num1;
let num2;
let operator;

// Functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return parseFloat((a * b).toPrecision(8));
}

function divide(a, b) {
  return parseFloat((a / b).toPrecision(8));
}

function operate(op, a, b) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}