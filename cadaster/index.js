const article = document.querySelector(".wrapper-user");
const sendButton = document.querySelector("#btn-ok");
let userList = [];
let count = 0;

const clearValueInput = () => {
  const input = document.querySelector("#input");
  return (input.value = "");
};

const defaultRender = () => {
  article.innerHTML = `
    <h2>User list:</h2>
    <p>There are no users on this list.</p>`;
};

const render = () => {
  article.innerHTML = `
  <h2>User list:</h2>
  <ul class="user-list"></ul>`;

  count = 0;

  const ul = document.querySelector(".user-list");
  userList.forEach((user) => {
    const itemList = createUser(user.value);
    user.value = itemList.value;
    user.idItem = itemList.idItem;
    user.li = itemList.li;
    ul.appendChild(user.li);
  });
};

function remove(idItem) {
  const li = document.querySelector(`#${idItem}`).innerText;
  const index = userList.findIndex((e) => e.value === li);
  userList.splice(index, 1);

  if (!userList.length) {
    defaultRender();
  }
  else {
    render();
  }
}

const createElementRemove = (idItem) => {
  const input = document.createElement("input");
  input.setAttribute("type", "button");
  input.style.marginLeft = "10px";
  input.value = "Remove";
  input.addEventListener("click", () => remove(idItem));

  return input;
};

function createUser(value) {
  const idItem = `item-${count++}`;
  const li = document.createElement("li");

  li.innerText = value;
  li.setAttribute("id", idItem);

  const button = createElementRemove(idItem);
  li.appendChild(button);

  return { value, idItem, li };
}

const addElement = () => {
  const value = document.querySelector("#input").value;

  clearValueInput();

  const itemList = createUser(value);
  userList = [...userList, itemList];

  render();
};

form.addEventListener("submit", (event) => event.preventDefault());

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  return addElement();
});
