let num1;
let num2;
let operator;

const clearBtn = document.querySelector("#clear");

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

function addToDisplay(btn) {
  const display = document.querySelector(".display");
  display.textContent = btn.textContent;
}