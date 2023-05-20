// html에 js파일 경로 만들고 js파일 작성하기!!

// 이벤트 리스너를통해 실행되는 함수의 event매개변수
// event = 특정 이벤트
// event.target = 특정 이벤트가 발생한 element
// event.target.parentElement = 특정 이벤트가 발생한 element의 부모 element
// event.target.parentElement.innerText = 특정 이벤트가 발생한 element의 부모 element의 innerText

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todoArray = [];

const TODOS_KEY = "todosLocal";


// 함수를 호출한 item에 대한 정보를 주는 매개변수 item
/* function sayHello(item){
    console.log(item, " is " , typeof item);
    console.log();
} */

// 저장된 투두를 화면에 출력하기, 배열 아이템을 삭제했다면 삭제한후에 다시 호출하면 된다.
function paintSavedTodo(){

    if (localStorage.getItem(TODOS_KEY)){
        const savedTodoArray = JSON.parse(localStorage.getItem(TODOS_KEY));
        savedTodoArray.forEach(paintTodo);

        // 이후에 submit했을때 값이 있는 배열에 추가할수있도록 배열을 변경한다
        todoArray = savedTodoArray;

    } else {
        console.log("nothing in localStorage");
    }
    

}

// 로컬 storage에 어레이 저장
// 배열을 넣으면 값이 저장되긴 하지만 문자열로 저장된다
// 현재 배열의 상태를 저장한다, 값을 누적하는 방식이 아니다
function saveTodo(){
    // JSON.stringify()를 이용해 배열 형태를 갖춘 문자열로 바꿔 저장한다
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
    
    
}

function deleteTodo(event){
    
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "X";

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    
}

function handleTodoSubmit(event){
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value="";

    todoArray.push(newTodo);
    saveTodo();
    paintTodo(newTodo);

}

todoForm.addEventListener("submit",handleTodoSubmit);
paintSavedTodo();
