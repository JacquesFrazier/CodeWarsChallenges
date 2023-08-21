//problem 

//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

//The order of the sequence has to stay the same.

//Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//answer 1

function distinct(a) {
    let unique = [];
    for (i = 0; i < a.length; i++) {
      if (unique.indexOf(a[i]) === -1) {
        unique.push(a[i])
      }
    }
    return unique;
  }

//answer 2

function distinct(a) {
    return [...new Set(a)];
  }

//answer 3
