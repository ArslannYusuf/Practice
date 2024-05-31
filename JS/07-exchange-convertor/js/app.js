let api_url = "https://api.exchangerate-api.com/v4/latest/";

let currencyOne = document.getElementById("currency-one");
let currencyTwo = document.getElementById("currency-two");
let amountEl = document.getElementById("amount");
let resultEl = document.getElementById("result");
let btnConvert = document.getElementById("btn-convert");

//!fetch ile veri cekme
fetch("./data/currencies.json")
  .then((res) => res.json())
  .then((data) => {
    let keys = Object.keys(data);
    let values = Object.values(data);

    let optionStr = "";
    for (let i = 0; i < keys.length; i++) {
      optionStr += `<option value=${keys[i]}> ${values[i]} </option>`;
    }

    currencyOne.innerHTML = optionStr;
    currencyTwo.innerHTML = optionStr;
  })
  .catch((error) => console.log(error));

//!butona tıklandıgında

btnConvert.addEventListener("click", () => {
  let baseCurrency = currencyOne.value;
  let targetCurrency = currencyTwo.value;
  let amount = amountEl.value;

  fetch(`${api_url}${baseCurrency}`)
    .then((res) => res.json())
    .then((data) => {
      let rates = data.rates[targetCurrency];

      resultEl.innerHTML = `${amount} ${baseCurrency} =  ${
        rates * amount
      } ${targetCurrency}`;
      amountEl.value = "";
    });
});
