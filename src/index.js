//lets create an array to meke sure we are able to display this

let todos = [];

//add todos to an array from the input

function createTodos(event) {
  event.preventDefault();

  todos.push(input.value);

  getTodos();
}
let searchFormElement = document.querySelector("#addInput");
searchFormElement.addEventListener("submit", createTodos);
function getTodos() {
  let items = "";
  todos.forEach((todo) => {
    items =
      items +
      `         <div class="item">
          <input type="checkbox" />
          <p>${todo}</p> 
        </div>`;
  });
  let item = document.querySelector(".todo-items");
  item.innerHTML = items;
}
