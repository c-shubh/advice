// References
let textArea = document.querySelector(".text-area");
const button = document.getElementById("btn");

function fetchdata() {
  fetch("https://api.adviceslip.com/advice?", {
    cache: "no-store",
  })
    .then((response) => response.json())
    .then((slipObj) => (textArea.innerText = slipObj.slip.advice));
}

const load = true;
load ? fetchdata() : null; // first time load

button.addEventListener("click", fetchdata);
