const cInput = document.querySelector("#celsius-input");
const fInput = document.querySelector("#fahrenheit-input");

function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 1.8 + 32) * 100) / 100;
}

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) / 1.8) * 100) / 100;
}

cInput.addEventListener("input", () => {
  if (cInput.value === "") {
    fInput.value = "";
  } else {
    fInput.value = celsiusToFahrenheit(parseFloat(cInput.value));
  }
});

fInput.addEventListener("input", () => {
  if (fInput.value === "") {
    cInput.value = "";
  } else {
    cInput.value = fahrenheitToCelsius(parseFloat(fInput.value));
  }
});
