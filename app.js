var btnTransalate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationalURL(text) {
  return `${serverURL}?text=${text}`;
}

function clickHandler() {
  fetch(getTranslationalURL(txtInput.value))
    .then((response) => response.json())
    .then((json) => (outputDiv.innerText = json.contents.translated))
    .catch((err) => {
      console.log("Some error occurred", err);
      alert("Something went wrong with the server!!!");
    });
}

btnTransalate.addEventListener("click", clickHandler);
