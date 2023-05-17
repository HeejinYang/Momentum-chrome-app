const h1 = document.querySelector(".introduce h1");

function handleClick(){
    h1.classList.toggle("clicked");
}

function handleMouseEnter(){
    h1.innerText = "mouse enter!!";
}

function handleMouseLeave(){
    h1.innerText = "mouse out!!";
}

function handleCopy(){
    alert("copied something!!");
}

h1.addEventListener("click", handleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("copy", handleCopy);