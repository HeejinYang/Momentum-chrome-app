const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");

function checkUserExist(){
    if (localStorage.getItem("username") === null){
    loginForm.classList.remove("hidden");
    greeting.classList.add("hidden");
    } else {
    loginForm.classList.add("hidden")
    greeting.classList.remove("hidden");

    const savedUserName = localStorage.getItem("username")
    greeting.innerText = `Welcome ${savedUserName}!`;
    }
}

function onLoginClick(event){

    // submit했을때 페이지가 재시작 되는것을 막는다
    event.preventDefault();

    // submit되어서 이 함수가 실행되었을때 인풋에 값이 있기때문에 여기에 위치한다
    const username = loginInput.value;

    //localStorage에 저장하기
    localStorage.setItem("username", username);
    checkUserExist();

}

checkUserExist();
loginForm.addEventListener("submit", onLoginClick);
