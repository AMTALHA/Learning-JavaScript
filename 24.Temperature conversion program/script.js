const textBox = document.getElementById("textBox");
const toFarenhite = document.getElementById("toFarenhite");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFarenhite.checked) {
    temp = Number(textBox.value)
    temp = temp * 9 / 5 + 32;
    result.textContent = `${textBox.value}°C = ${temp}°F`;
  } else if (toCelsius.checked) {
    temp = Number(textBox.value)
    temp = (temp - 32) * 5 / 9;
    result.textContent = `${textBox.value}°F = ${temp}°C`;
  } else {
    result.textContent = "Plese Select a Unit";
  }
}