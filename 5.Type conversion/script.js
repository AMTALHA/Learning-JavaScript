
// 5.Type Conversion...............................................................................

let age = window.prompt('How Old are You ?');
age = Number(age);
age+=1;
console.log(age, typeof age);

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);