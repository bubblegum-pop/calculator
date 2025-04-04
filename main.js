let num1 = "";
let num2 = "";
let operator = "";
let currentValue = 0;

const allBtns = document.querySelectorAll("button");
allBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (isNumberBtn(btn)) {
      if (displayIsZero()) {
        clearDisplay();
      }
      addToDisplay(btn.id);
      currentValue = getDisplayValue();
    } else if (isClearBtn(btn)) {
      setDisplayToZero();
      num1 = "";
      num2 = "";
      operator = "";
    }
  });
});

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

function addToDisplay(value) {
  document.querySelector(".display").textContent += value;
}

function clearDisplay() {
  document.querySelector(".display").textContent = "";
}

function displayIsZero() {
  return document.querySelector(".display").textContent == 0;
}

function setDisplayToZero() {
  clearDisplay();
  addToDisplay(0);
}

function getDisplayValue() {
  return document.querySelector(".display").textContent;
}

function isNumberBtn(btn) {
  return btn.className === "number";
}

function isOperatorBtn(btn) {
  return btn.className === "operator";
}

function isClearBtn(btn) {
  return btn.id === "clear";
}