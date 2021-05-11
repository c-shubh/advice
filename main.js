// References
let textArea = document.querySelector(".text-area");

fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((slipObj) => (textArea.innerText = slipObj.slip.advice));
