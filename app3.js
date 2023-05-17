const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");
const deleteUserBtn = document.getElementById("deleteUserBtn");

let username ="";
const HIDDEN_CLASSNAME = "hidden";

// 이렇게 하면 delete한후에는 sevedUserName변수를 이용하면 안된다..
const savedUserName = localStorage.getItem("username");

function checkUserExist(){
    if(localStorage.getItem("username")=== null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        deleteUserBtn.classList.add(HIDDEN_CLASSNAME);
    } else {
        console.log("username exists");
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.classList.remove(HIDDEN_CLASSNAME);
        deleteUserBtn.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `Welcome ${localStorage.username} !!`;
    }
}

function onLoginClick(event){
    event.preventDefault();
    
    username = loginInput.value;
    localStorage.setItem("username", username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    deleteUserBtn.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome ${localStorage.username} !!`;
}

function onDeleteClick(event){
    localStorage.removeItem("username");
    console.log("username deleted");

    checkUserExist();
}

checkUserExist();
loginForm.addEventListener("submit", onLoginClick);
deleteUserBtn.addEventListener("click", onDeleteClick);

// 중복되는거 많은것같다 코드 정리 필요