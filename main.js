// References
let textArea = document.querySelector(".text-area");

fetch("https://api.adviceslip.com/advice?", {
    cache: "no-store",
})
    .then((response) => response.json())
    .then((slipObj) => (textArea.innerText = slipObj.slip.advice));
