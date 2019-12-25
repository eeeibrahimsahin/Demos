let inputAmount = document.getElementById("input-amount");
let outputAmount = document.querySelector("#output-amount");
let fromCurrency = document.querySelector("#from");
let to = document.querySelector("#to");

window.addEventListener("DOMContentLoaded", event => {
  let xhr = getCurrencyRates();
  xhr.onload = function() {
    if (this.status == 200) {
      let rates = JSON.parse(this.responseText).rates;
      for (let index in rates) {
        let newElement = document.createElement("option");
        let newElement2 = document.createElement("option");
        newElement.innerText = index;
        newElement2.innerText = index;
        fromCurrency.appendChild(newElement);
        to.appendChild(newElement2);
      }
    }
  };
});

document.querySelector("#convert").addEventListener("click", convertCurrency);

function convertCurrency() {
  let xhr = getCurrencyRates();
  xhr.onload = function() {
    if (this.status == 200) {
      let rates = JSON.parse(this.responseText).rates;
      let amount =
        (inputAmount.value / rates[fromCurrency.value]) * rates[to.value];
      outputAmount.value = amount.toFixed(2);
      console.log(rates);
    }
  };
}

function getCurrencyRates() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.exchangeratesapi.io/latest");

  xhr.send();
  return xhr;
}
