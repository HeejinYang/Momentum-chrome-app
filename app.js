// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginClick(event){
//     const username = loginInput.value;

//     if(username ===""){
//         alert("please enter your name!");
//     } else if(username.length >15){
//         alert("your name is too long!!");
//     } else {
//         console.log(username);
//     }
    
//     console.log(event);
// }

// loginButton.addEventListener("click", onLoginClick)

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const h1 = document.querySelector("h1");

function onLoginClick(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    
    loginForm.classList.toggle("hidden");
    h1.classList.toggle("hidden");
    //h1.innerText="Welcome "+ username;
    h1.innerText = `Welcome ${username} ~~!!`;
}



loginForm.addEventListener("submit", onLoginClick);

