// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFoods(...foods) {
//   return foods;
// }

// let food1 = "pizza";
// let food2 = "burger";
// let food3 = "milk shake";
// let food4 = "hot dog";
// let food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

// const foods = getFoods(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(2, 4, 6, 8, 10);

// console.log(`Your Total is $${total}`);

// function average(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const averageTotal = average(2, 4, 6, 8, 100)

// console.log(`Your Average is $${averageTotal}`);

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullname = combineStrings("MR.", "Spongbob", "Squarepants");

console.log(fullname);