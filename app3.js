const loginForm = document.querySelector("#login-form");
const loginIuput = loginForm.querySelector("input");

let username ="";

const h1 = document.querySelector("h1");


function onLoginClick(event){
    event.preventDefault();
    username = loginIuput.value;
    h1.innerText = `Welcome ${username} !!`;
    loginForm.classList.toggle("hidden");
    h1.classList.toggle("hidden");
}

loginForm.addEventListener("submit", onLoginClick);
