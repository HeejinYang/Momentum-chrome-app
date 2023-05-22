const inputMaxRange = document.querySelector("#max");
let maxNumber=0;
const guessingForm = document.querySelector("#guessing-form");
const inputGuessing = guessingForm.querySelector("input");
const submitBtn = guessingForm.querySelector("button");
const result = document.querySelector("#result");

function onClickPlay(event){
    event.preventDefault();
    
    const randomNumber = makeRandomNumber(maxNumber);
    const guessingNumber = parseInt(inputGuessing.value);
    if(isNaN(guessingNumber) || guessingNumber<0 ){
        alert("enter the right number, the number can't be negative");
        return 0;
    }

    console.log("this is computer chosen ",randomNumber);

    if (guessingNumber === randomNumber){
        result.innerHTML=`you entered :${guessingNumber} , computer chose: ${randomNumber} <br><b>You Win!!</b>`;
    }else {
        result.innerHTML=`you entered :${guessingNumber} , computer chose: ${randomNumber} <br><b>You Lost!!</b>`;
    }   
}

function makeRandomNumber(number){
    return Math.floor(Math.random()*(number+1));
}


function maxChange(event){
    event.preventDefault();
    maxNumber = parseInt(inputMaxRange.value);

    if(isNaN(maxNumber) || maxNumber<0 ){
        alert("enter the right number, the number can't be negative");
        return 0;
    }
    console.log("maxnumber is ", maxNumber);
    
}

inputMaxRange.addEventListener("input", maxChange);
submitBtn.addEventListener("click", onClickPlay);

