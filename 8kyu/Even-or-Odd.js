//problem 

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//answer 1
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd"
    }
  }

//answer 2

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }