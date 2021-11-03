const input = document.querySelector("section form #input");
const form = document.querySelector("section #form");

let obj = [];
let obj2 = [];
let count = 0;
let intervalId = null;

const createElement = () => {
  const ul = document.querySelector("article ul");

  obj.forEach((item) => {
    obj2 = [...obj2, item]
    const li = document.createElement("li");
    const text = document.createTextNode(
      `name: ${item.name} time: ${item.time}`
    );
    li.appendChild(text);
    ul.appendChild(li);
  });
};

const startTimer = () => {
  if (!intervalId) {
    intervalId = setInterval(function () {
      count++;
    }, 1000);
  }
};

const stopTimer = () => {
  if (intervalId !== undefined && intervalId !== null) {
    obj = [{ name: input.value, time: count }];

    clearInterval(intervalId);
    intervalId = null;

    createElement();
    count = 0;
  }
  return "";
};

const mathMax = () => {
  let test = [];
  let h = Math.min(...obj2.map((item) => item.time));
  console.log(obj2)

  for (const index in obj2) {
    if (h === obj2[index].time) {
      test = [...test, obj2[index]];
      localStorage.setItem("winner", JSON.stringify(test))
    }
  }
  sessionStorage.setItem("List of participants", JSON.stringify(obj2))
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
