//problem 

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

//answer 1

function squareSum(numbers){
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i] * numbers[i]
    }
    
    return total;
  }

//answer 2
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }