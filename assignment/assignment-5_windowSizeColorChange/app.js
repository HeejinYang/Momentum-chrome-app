const body = document.querySelector("body");

function detectSize(){
    const width = window.innerWidth;

    if(width < 600){
        body.classList.add("small");
        body.classList.remove("medium");
        body.classList.remove("large");
    } else if (width >=600 && width < 900){
        body.classList.remove("small");
        body.classList.add("medium");
        body.classList.remove("large");
    } else {
        body.classList.remove("small");
        body.classList.remove("medium");
        body.classList.add("large");
    }

}


detectSize();
window.addEventListener("resize", detectSize);