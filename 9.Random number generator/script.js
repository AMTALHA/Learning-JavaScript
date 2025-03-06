// Rondom Number Generator

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myH3 = document.getElementById("myH3");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max + min);
  document.getElementById("myH3").textContent = `Your Random Number is ${randomNum}`
  myLabel.textContent = randomNum;
} 
  
  