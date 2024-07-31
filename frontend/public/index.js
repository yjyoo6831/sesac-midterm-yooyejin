

const todo = document.querySelector("#todo");
const inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector("#addBtn");
const todoBox = document.querySelector("#todoBox");


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

const fetchInfo = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => {
    if(response.ok){
        return response.json();
    }else{
        console.error("error");
    }
  })
};
const repoInfos=function(info) { 
    for(user of userInfos){
        let li = document.createElement('input');
        li.classList.add('todo-list');
        let info= `` ///여기부터 하기 
    }
}


// addBtn.addEventListener("click", () => {
function addTodo() {

    const checkBox = document.createElement("input"); //checkbox 
    const newTodo = document.createElement("label");
    const checkMark = document.createElement("span"); //취소선
    const rmBtn = document.createElement("button");
    if(todo.value === '' ){
        alert('공백이나 빈 문자열이 있습니다.');
        todo.value='';
    }
    console.log(">>> ",inputTodo.value);
    newTodo.className = "new-todo";
    newTodo.innerText = inputTodo.value;
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
  };
  
