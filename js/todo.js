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


// 함수를 호출한 item(배열요소)에 대한 정보를 주는 매개변수 item
/* function sayHello(item){
    // 자신을 호출한 배열 요소 자체를 알려준다
    console.log(item, " is " , typeof item);
    console.log();
} */
// todosLocalArray.forEach(sayHello);

// 줄인 버전 (Arrow function)
// todosLocalArray.forEach((item)=>console.log(item, " is " , typeof item));

// 저장된 투두를 화면에 출력하기, 배열 아이템을 삭제했다면 삭제한후에 다시 호출하면 된다.
function paintSavedTodo(){
    const todosLocalRaw = localStorage.getItem(TODOS_KEY);

    if(todosLocalRaw){
        const todosLocalArray = JSON.parse(todosLocalRaw);
        console.log(todosLocalArray);
        // todosLocalArray.forEach((item)=>paintTodo(item));


        // 화면에 저장된 투두가 출력된후에 새로 submit했을때에 기존배열값을 유지하면서 추가할수있게 한다
        todoArray = todosLocalArray;

        // paintTodo함수에 인자로 각 배열의 요소들이 들어가며 함수를 호출한다
        todosLocalArray.forEach(paintTodo);
        
    } else {
        console.log("there's nothing to paint");
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
    const li = event.target.parentElement;
    // paintTodo에서 li에 id값 넣어줘서 li에 id값 존재한다
    
    todoArray = todoArray.filter(item=>item.id !== parseInt(li.id));
    saveTodo();
    li.remove();
    console.log("투두 삭제됨");
    console.dir(event.target);
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    // 엔터쳤을때 페이지가 재시작되는것을 막는다
    event.preventDefault();

    // input태그 엘리먼트의 입력값을 받아오려면 innerText하는게 아니라 value의 값을 가져와야한다
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id:Date.now(),
        text:newTodo,
    };
    todoArray.push(newTodoObj);
    saveTodo();
    paintTodo(newTodoObj);

}

todoForm.addEventListener("submit",handleTodoSubmit);
paintSavedTodo();
