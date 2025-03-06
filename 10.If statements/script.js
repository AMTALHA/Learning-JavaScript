// let age = 17;

// if (age >= 18) {
//   console.log('You Can Drive a Car');
// }
// else {
//   console.log("You Can't Drive a Car");
// }

// let time = 13;

// if (time < 12) {
//   console.log("Good Morning")
// }
// else {
//   console.log("Good Afternoon")
// }

// let isStudent = false;

// if (isStudent) {
//   console.log("You are a Student")
// }
// else {
//   console.log("You are Not a Student")
// }

// let age = 25;
// let hasLicense = false;

// if (age >= 18) {
//   console.log("You are Old Enough to Drive a Car");
  
//   if(hasLicense) {
//     console.log("You Have a Driving License")
//   }

//   else {
//     console.log("You Do Not Have a Driving License")
//   }
// }
// else {
//   console.log("You Must Be 18+ to Have a Driving License");
// }

// let age = 30;


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement")

let age ;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  
if (age >= 100) {
  console.log('You are too old to Drive a Car');
  resultElement.textContent = "You are too old to Drive a Car";
}
else if (age == 0) {
  console.log("It's time to Cry not to Drive a Car !");
  resultElement.textContent = "It's time to Cry not to Drive a Car!";
}
else if (age >= 18) {
  console.log('You Can Drive a Car!');
  resultElement.textContent = "You Can Drive a Car!";
}
else if (age < 0) {
  console.log('Invalid age !!!');
  resultElement.textContent = "Invalid age!!!";
}
else {
  console.log("You Can't Drive a Car");
  resultElement.textContent = "You Can't Drive a Car";
}
}

