const generationNumber = () => Math.round(Math.random() * 10)
const time = () => Math.round(Math.random() * 10)

const array1 = [
  Array.from({ length: generationNumber() }, () =>
    Math.floor(Math.random() * 100)
  ),
];
const array2 = [
  Array.from({ length: generationNumber() }, () =>
    Math.floor(Math.random() * 500)
  ),
];
const array3 = [
  Array.from({ length: generationNumber() }, () =>
    Math.floor(Math.random() * 1000)
  ),
];

const createPromise = (arr) => {
  return Promise.resolve(arr);
}

const promiseAllSettled = () => {
  const ul = document.querySelector("div ul#allSettled");

  Promise.allSettled([createPromise(array1), createPromise(array2), createPromise(array3)]).then((results) => {
    results.forEach((item) => {
      const li = document.createElement("li");
      const text = document.createTextNode(item.value);
      li.appendChild(text);
      ul.appendChild(li);
    });
  });
};

const promiseAll = () => {
  const ul = document.querySelector("div ul#all");

  Promise.all([createPromise(array1), createPromise(array2), createPromise(array3)]).then((results) => {
    console.log(results);
    const li = document.createElement("li");
    const text = document.createTextNode(results);
    li.appendChild(text);
    ul.appendChild(li);
  });
};

const promiseRace = () => {
  const promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, time(), array1);
  });

  const promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, time(), array2);
  });

  const promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, time(), array3);
  });

  const ul = document.querySelector("div ul#race");

  Promise.race([promise1, promise2, promise3]).then((results) => {
    console.log(results);
    const li = document.createElement("li");
    const text = document.createTextNode(results);
    li.appendChild(text);
    ul.appendChild(li);
  });
};
