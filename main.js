let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let currentValue = 0;
let lastBtnClicked = "";

const allBtns = document.querySelectorAll("button");
allBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    switch (true) {
      case isNumberBtn(btn):
        if (displayIsZero() || lastBtnClicked === "operator") {
          clearDisplay();
        }
        addToDisplay(btn.id);
        currentValue = getDisplayValue();
        lastBtnClicked = "number";
        break;
      case isClearBtn(btn):
        setDisplayToZero();
        num1 = "";
        num2 = "";
        operator = "";
        currentValue = getDisplayValue();
        lastBtnClicked = "clear";
        break;
      case isOperatorBtn(btn):
        operator = btn.textContent;
        num1 = currentValue;
        lastBtnClicked = "operator";
        break;
      case isEqualsBtn(btn):
        num2 = currentValue;
        result = operate(operator, num1, num2);
        clearDisplay();
        addToDisplay(result);
        lastBtnClicked = "equals";
        break;
    }
  });
});

// Functions

function add(a, b) {
  return parseInt(a) + parseInt(b);
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

function isEqualsBtn(btn) {
  return btn.id === "equals";
} 

// To Do

// Clicking "-" before a number should make it a negative number
