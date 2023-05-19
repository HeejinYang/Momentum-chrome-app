// html에 js파일 경로 만들고 js파일 작성하기!!

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

function deleteTodo(event){
    console.log(event.target.parentElement.innerText);
    // event객체에서 target(클릭된 element) 속성에서 부모 엘리먼트객체를 찾을수있다

    // 이벤트 리스너를통해 실행되는 함수의 event매개변수
    // event = 특정 이벤트
    // event.target = 특정 이벤트가 발생한 element
    // event.target.parentElement = 특정 이벤트가 발생한 element의 부모 element
    // event.target.parentElement.innerText = 특정 이벤트가 발생한 element의 부모 element의 innerText
    

    const li = event.target.parentElement;
    li.remove();
    console.log("li is delete!");

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
    //localStorage.setItem("todo-first",newTodo);

    const newTodo = todoInput.value;
    todoInput.value = "";

    paintTodo(newTodo);

}


todoForm.addEventListener("submit",handleTodoSubmit);