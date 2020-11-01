const listToDo = document.querySelector(".listToDo");
const createToDo = document.querySelector(".createToDo label");
const valueToDo = document.querySelector(".createToDo input");

function createElement() {
  let containerToDo = document.createElement("div");
  containerToDo.classList.add("todo");
  containerToDo.innerHTML = `<p class="style-todo"></p><span class="button remove" onClick='removeTodo(event)'>REMOVE</span>`;
  return containerToDo;
}

function addElement(todo) {
  todo.querySelector("p").innerText = valueToDo.value;
  listToDo.appendChild(todo);
}

function removeTodo(event) {
  const todo = event.currentTarget;
  todo.parentElement.remove();
}

createToDo.addEventListener("click", () => {
  if (!valueToDo.value == "") {
    const newToDo = createElement();
    addElement(newToDo);
    valueToDo.value = "";
  }
});

window.addEventListener("keydown", (e) => {
  if (!valueToDo.value == "") {
    if (e.code == "Enter") {
      const newToDo = createElement();
      addElement(newToDo);
      valueToDo.value = "";
    }
  }
});
