// 이미지 파일명이 있는 배열
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
]

// 이미지배열에서 하나 랜덤하게 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];


// createElement 는 document의 함수
// 엘리먼트 객체를 만든다
const bgImage = document.createElement("img");

// 이미지 엘리먼트객체의 src속성에 값을 넣는다
bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage=`url(img/${chosenImage})`;


