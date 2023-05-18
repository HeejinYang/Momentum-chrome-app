const quotes = [
    {
        quote: "Make it count",
        author: "Jack Dawson",
    },
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다",
        author: "오손 웰스",
    },
    {
        quote: "해뜨기 전이 가장 어둡다",
        author: "에밀 시오랑",
    },
    {
        quote: "피할 수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단테",
    },
    {
        quote: "행복은 습관이다,그것을 몸에 지니라",
        author: "허버드",
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈",
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라",
        author: "헨리포드",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다",
        author: "나폴레옹",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// floor함수의 인자에 값을 넣어야되는데 값.floor()처럼 값에서 호출하는 이상한 코드를 자꾸 쓴다 , 주의하기
//console.log(quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

