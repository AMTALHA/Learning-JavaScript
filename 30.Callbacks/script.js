// callback = callback is a function that is passed as an argument
//            to another function.

//            Used to Handle asynchoronus operations
//            1.Reading a File
//            2.Network Requests
//            3.Interacting With Database

// hello(leave);




// function hello(callback) {
//   console.log("Hello");
//   callback();
// }

// function leave() {
//   console.log("Bye");
// }

// function goodbye() {
//   console.log("Good Bye")
// }

sum(displayConsole, 10, 20)


function sum(callback, x, y) {
  const result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}
