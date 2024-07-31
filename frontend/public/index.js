

// const todo = document.querySelector("#todo");
const inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector("#addBtn");
const todoBox = document.querySelector("#todoBox");

addBtn.addEventListener("click", () => {
    const newTodo = document.createElement("label");
    const checkBox = document.createElement("input");
    const checkMark = document.createElement("span");
    const rmBtn = document.createElement("button");

    newTodo.className = "new-todo";
    newTodo.innerText = todo.value;
    checkBox.type = "checkBox";
    checkMark.className = "check-mark";
    rmBtn.className = "rm-btn";

    newTodo.appendChild(checkBox);
    newTodo.appendChild(checkMark);
    newTodo.appendChild(rmBtn);
    todoBox.appendChild(newTodo);

    todo.value = "";

    checkBox.addEventListener("change", () => {
    newTodo.classList.toggle("check");
  });

    rmBtn.addEventListener("click", (event) => {
    todoBox.removeChild(event.currentTarget.parentNode);
  });
});

const getTodos = () => {
    try {
        fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => console.log(data)); //object
        
    } catch (error) {
        console.error(error);
        alert('데이터를 불러올 수 없음')
    }
};
getTodos();

// addBtn.addEventListener("click", () => {
function addTodo() {

    const newTodo = document.createElement("label");
    const checkBox = document.createElement("input");
    const checkMark = document.createElement("span");
    const rmBtn = document.createElement("button");
  
    if(inputTodo.value='' ){
        alert('공백이나 빈 문자열이 있습니다.');
        inputTodo.value='';
    }
    newTodo.className = "new-todo";
    newTodo.innerText = todo.value;
    checkBox.type = "checkBox";
    checkMark.className = "check-mark";
    rmBtn.className = "rm-btn";
    // rmBtn.value='X';
  
    newTodo.appendChild(checkBox);
    newTodo.appendChild(checkMark);
    newTodo.appendChild(rmBtn);
    todoBox.appendChild(newTodo);
  
    todo.value = "";
  
    checkBox.addEventListener("change", () => {
      newTodo.classList.toggle("check");
    });
  
    rmBtn.addEventListener("click", (event) => {
      todoBox.removeChild(event.currentTarget.parentNode);
    });
  };
  
