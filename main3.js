// <8kyu> We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  // Return a string
  return num.toString()
}


// <8kyu> Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}