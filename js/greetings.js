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

// 유저 정보 받아서 localStorage에 저장하기
function onLoginClick(event){

    // submit했을때 페이지가 재시작 되는것을 막는다
    event.preventDefault();

    //localStorage에 저장하기
    localStorage.setItem("username", loginInput.value);
    checkUserExist();

}

checkUserExist();
loginForm.addEventListener("submit", onLoginClick);
