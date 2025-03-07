

// 4.Accept User Input............................................................................

// How to accept User Input

// 1. Easy Way = Window Prompt
// 2. Proffesional Way Html Text Box

// This is the Easy Way
// let username = window.prompt("Hey What's Your UserName ?")

console.log(username);

// This is the Proffesional Way

let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById('myH1').textContent = `Welcome ${username}`;
  console.log(username)
}
