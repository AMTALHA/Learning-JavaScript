// 6.Constants.....................................................................................

// const = is a Varible Which Can't Be Re Declared

// let a = 2;
// a = 2 + 2;
// it will show The answar 4
// But const is like this,
// const b = 2;
// b = 2 + 2; Show Error

// let pi = 3.14159
// let radious;
// let circumference;

// radious = window.prompt("Enter The Radious of a Circle")
// radious = Number(radious)

// circumference = 2 * pi * radious;
// console.log(circumference);

let pi = 3.14159;
let radious;
let circumference;

circumference = 2 * pi * radious;

document.getElementById('mySubmit').onclick = function () {
  radious = document.getElementById('myText').value;
  radious = Number(radious);
  circumference = 2 * pi * radious;
  document.getElementById(
    'myH3'
  ).textContent = `The Circumference is ${circumference} cm`;
  console.log(circumference);
};
