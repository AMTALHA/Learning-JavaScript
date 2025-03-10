// Spread operator

// let num = [1, 2, 3, 4, 5];
// let maximum = Math.max(...num);
// let minimum = Math.min(...num);
// console.log(maximum);
// console.log(minimum);

// let username = "AM Talha"

// let letters = [...username].join(".")
// console.log(letters);

let fruits = ["apple", "orange", "banana"]
let vegetables = ["potato", "tomato", "onion"]
let fruitsAndVegetables = [...fruits, "mango", "grapes",...vegetables]
console.log(fruitsAndVegetables);