let inputAmount = document.getElementById("input-amount");
let outputAmount = document.querySelector("#output-amount");
let fromCurrency = document.querySelector("#from");
let to = document.querySelector("#to");

window.addEventListener("DOMContentLoaded", event => {
  getCurrencyRates(createElements);
});

document
  .querySelector("#convert")
  .addEventListener("click", getConvertCurrency);

function getConvertCurrency() {
  getCurrencyRates(convert);
}
function convert(rates) {
  let amount =
    (inputAmount.value / rates[fromCurrency.value]) * rates[to.value];
  outputAmount.value = amount.toFixed(2);
}
function getCurrencyRates(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.exchangeratesapi.io/latest");
  xhr.onload = function() {
    if (this.status == 200) {
      let rates = JSON.parse(this.responseText).rates;
      callback(rates);
    }
  };
  xhr.send();
}
function createElements(rates) {
  for (let index in rates) {
    let newElement = document.createElement("option");
    let newElement2 = document.createElement("option");
    newElement.innerText = index;
    newElement2.innerText = index;
    fromCurrency.appendChild(newElement);
    to.appendChild(newElement2);
  }
}
