// assginment operator =
// Comparison Operator ==
// Strict Equality Operator ===
// Enequality Operator !=
// Strict Enequality Operator !==

// == This Compare only Value Not The Datatype
// === This Compare Value and also Datatype

const PI = 3.14;

// == This Compare only Value Not The Datatype
if (PI == "3.14") {
  console.log("It is a PI");
} else {
  console.log("It is not a PI");
}

// === This Compare Value and also Datatype
if (PI === "3.14") {
  console.log("It is a PI");
} else {
  console.log("It is not a PI");
}

// != This Compare only Value Not The Datatype

let number = 10;
if (number != "10") {
  console.log("It is not a string");
} else {
  console.log("It is a string");
}

// !== This Compare Value and also Datatype

let string = "10";
if (string !== 10) {
  console.log("It is not a number");
} else {
  console.log("It is a number");
}