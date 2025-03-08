// Number Guesing Game

const minNum = 1;
const maxNum = 100;
const answar = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attemts = 0;
let guese;
let running = true;

while (running) {
  guese = window.prompt(`Guese The Number Between ${minNum} and ${maxNum}`);
  guese = Number(guese);

  if (isNaN(guese)) {
    window.alert('Please Enter a Valid Number');
  } else if (guese < minNum || guese > maxNum) {
    window.alert(`Please Enter a Number Between ${minNum} and ${maxNum}`);
  } else {
    attemts++;
    if (guese < answar) {
      window.alert('Too Low, Try Again');
    } else if (guese > answar) {
      window.alert('Too High, Try Again');
    } else {
      window.alert(`Congratulations! You Guessed It in ${attemts} Attempts`);
      running = false;
    }
  }
}
