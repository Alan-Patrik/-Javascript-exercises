const historicSpan = document.querySelector("#historic-container span");
const valueOperators = document.querySelectorAll("button.operator");
const valueInput = document.querySelector('input[type="number"]');
const totalSpan = document.querySelector("#display-total span");
const historicButton = document.querySelector("#btn-historic");
const detailsSpan = document.querySelector("#details span");
const equalsButton = document.querySelector("#btn-equals");
const enterButton = document.querySelector("#btn-enter");
const clearButton = document.querySelector("#btn-clear");
const resetButton = document.querySelector("#btn-reset");

let history = new Map();
let totalStringInitial = "";
let totalString = "";
let operator = "";
let storage = [];
let total = 0;

const enter = () => {
  valueInput.value ? (storage = [...storage, +valueInput.value]) : storage;
  detailsSpan.innerText += ` ${valueInput.value} `
  totalStringInitial = operator
  operator = "";
  clearInput();

  return storage;
};

const clearInput = () => {
  detailsSpan.innerText += ` ${totalStringInitial} `
  totalStringInitial = "";

  return (valueInput.value = "");
};

const clearDetails = () => {
  return (detailsSpan.innerText = []);
};

const test = (function() {
  valueOperators.forEach((opr) => {
    opr.addEventListener("click", (event) => {
      operator = event.target.textContent,
      totalString = event.target.textContent
    });
  });
  clearDetails()
})()

const log = (value, key) => {
  detailsSpan.innerText = ` ${key} = ${value} `;
};

const equals = () => {
  test;
  operator = totalString;

  const result = resultEquals(operator);
  const operation = `${storage.join(` ${operator} `)}`;
  
  history.set(operation, result);
  storage.splice(0, storage.length);

  total += +result;
  totalSpan.innerText = total;

  history.forEach(log);

  operator = "";

  return result;
};

function resultEquals(operator) {
  switch (operator) {
    case "+":
      return storage.reduce((sum, current) => sum + current, 0);
      break;

    case "-":
      return storage.reduce((sum, current) => sum - current);
      break;

    case "x":
      return storage.reduce((sum, current) => sum * current);
      break;

    case "/":
      return storage.reduce((sum, current) => sum / current);
      break;

    default:
      return "Invalid operation!";
      break;
  }
}

const list = () => {
  const listHistory = (value, key) => {
    historicSpan.innerText += `${key} = ${value}\n`;
  };

  return history.forEach(listHistory);
};

const reset = () => {
  history = new Map();
  storage.splice(0, storage.length);

  totalSpan.innerText = storage;
  historicSpan.innerText = storage;

  return storage;
};