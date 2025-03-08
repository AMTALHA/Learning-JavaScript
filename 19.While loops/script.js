// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt(`Enter Your Username`);
// }

// console.log(`Hello ${username}`);


let loggedIN = false;
let username;
let password;

while (!loggedIN) {
  username = window.prompt("Enter Your Username");
  password = window.prompt("Enter Your Password");

  if (username === "myUsername" && password === "myPassword") {
    loggedIN = true;
    console.log(`Welcome! Back`);
  } else {
    console.log("Invalid Username or Password. Try again.");
  }
}