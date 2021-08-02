const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (input.value.length > 0) {
    todoList();
  }
});

input.addEventListener("keypress", function (event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    todoList();
  }
});

function todoList() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
