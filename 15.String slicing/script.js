// const fullName = 'Abdullah Muhammad Talha';

// let firstName = fullName.slice(0, 8);
// let midName = fullName.slice(9, 18);
// let lastName = fullName.slice(18);

// console.log(fullName);
// console.log(firstName);
// console.log(midName);
// console.log(lastName);

const email = 'amtalhabd@gmail.com';

let username = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);

console.log(username);

console.log(extension);
