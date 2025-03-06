const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are Subscribed";
  }
  else {
    subResult.textContent = "You are Not Subscribed";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "Your Payment Method is Visa";
  }
  else if (masterCardBtn.checked) {
    paymentResult.textContent = "Your Payment Method is Master Card";
  }
  else if (paypalBtn.checked) {
    paymentResult.textContent = "Your Payment Method is Paypal";
  }
  else {
    paymentResult.textContent = "Please Select a Payment Method";
  }
}
