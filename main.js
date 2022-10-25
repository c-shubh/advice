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

button.addEventListener("click", fetchdata);

