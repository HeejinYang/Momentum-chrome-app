// html에 js파일 경로 만들고 js파일 작성하기!!

// 이벤트 리스너를통해 실행되는 함수의 event매개변수
// event = 특정 이벤트
// event.target = 특정 이벤트가 발생한 element
// event.target.parentElement = 특정 이벤트가 발생한 element의 부모 element
// event.target.parentElement.innerText = 특정 이벤트가 발생한 element의 부모 element의 innerText

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const todoArray = [];

// 로컬 storage에 어레이 저장
// 배열을 넣으면 값이 저장되긴 하지만 문자열로 저장된다
// 현재 배열의 상태를 저장한다, 값을 누적하는 방식이 아니다
function saveTodo(){

    // JSON.stringify()를 이용해서 그냥 문자열이 아닌 배열 형태를 갖춰서 저장하게 한다
    localStorage.setItem("todos", JSON.stringify(todoArray));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.append(li);
}

function handleTodoSubmit(event){
    // 엔터쳤을때 페이지가 재시작되는것을 막는다
    event.preventDefault();

    // input태그 엘리먼트의 입력값을 받아오려면 innerText하는게 아니라 value의 값을 가져와야한다
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoArray.push(newTodo);
    saveTodo();
    paintTodo(newTodo);

}

todoForm.addEventListener("submit",handleTodoSubmit);



/* const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function deleteTodo(event){
    event.target.parentElement.remove();
}

function paintingTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    paintingTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit); */
