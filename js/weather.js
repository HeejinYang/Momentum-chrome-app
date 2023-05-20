function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`당신의 위치 \n위도:${lat}, 경도:${lng}`);
}

function onGeoFail(){
    alert("error occured");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);