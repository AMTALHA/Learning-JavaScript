// 2.Variables....................................................................................

// Variables = This is like a container which stores a value

// There is 2 ways to create a variable
// 1.Declaration    let x;
// 2.assignment     x = 100

let x;
x = 100;

// or

let x = 100;

console.log(x)

// data types

let age = 12
let price = 10.99

// Typeof

console.log(typeof age);
console.log(typeof price);

// Template literals
console.log(`you are ${age} Years old`);
console.log(`The Price is ${price}$`)

let lastName = "Talha"
let favoriteFood = "Meet"
let email = "amtalhabd@gmail.com"
console.log(typeof lastName);
console.log(`My Name is ${lastName}`)
console.log(`My Favorite Food is ${favoriteFood}`);
console.log(`My email is ${email}`)

// Booleans

let online = true;
let inStock = false;
console.log(typeof online);

console.log(`Bro is Online: ${online}`);
console.log(`The item is in Stock: ${inStock}`);

let fullName = "Abdullah Muhammad Talha";
let age = 12;
let Enrolled = true;

document.getElementById("p1").textContent = `Your Name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById("p3").textContent = `are You Enrolled: ${Enrolled}`;
