function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // 자바스크립트가 직접 url을 부른다
    // fetch는 promise, 시간이 좀 걸리고 일어난다?
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");
        city.innerHTML = `위치: ${data.name}`;
        weather.innerHTML = `날씨: ${data.weather[0].main}`;
        temp.innerHTML = `온도: ${data.main.temp}`;
        

        

    });
}

function onGeoFail(){
    alert("error occured");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);