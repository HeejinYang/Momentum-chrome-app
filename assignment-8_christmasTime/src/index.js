const clockTitle = document.querySelector(".js-clock");

function showRestTime(){
    const date = new Date();
    let christmasString = "";

    if(date.getMonth() === 12){
        if(date.getDate()>25){
            christmasString = `${date.getFullYear()+1}-12-25`;
        }else if(date.getDate()===25){
            console.log("christmas is today");
            clockTitle.innerHTML=`today is christmas!`; 
            return 0;
        }
    }else{
        christmasString = `${date.getFullYear()}-12-25`;
    }
    
    const christmasSeconds = Date.parse(christmasString);
    const restMiliSeconds = christmasSeconds-Date.now();
    const restSeconds = Math.floor(restMiliSeconds/1000);
    const seconds = String(Math.floor(restSeconds%60)).padStart(2,'0');
    const minutes = String(Math.floor((restSeconds/60)%60)).padStart(2,'0');
    const hours = String(Math.floor((restSeconds/3600)%24)).padStart(2,'0');
    const days = String(Math.floor((restSeconds/3600/24)));
    

    clockTitle.innerHTML=`${days}d ${hours}h ${minutes}m ${seconds}s`;
}



showRestTime();
setInterval(showRestTime, 1000);

/* function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }else if (year%100 === 0){
        return false;
    }else if (year%4 === 0){
        return true;
    }else {
        return false;
    }
}

function isChristmasPassed(date){
    if(date.getMonth() === 12){
        if(date.getDate()>25){
            return true;
        }else if(date.getDate()===25){
            return `today is christ mas!!`;
        }else{
            return false;
        }
    }else{
        return false;
    }
} */