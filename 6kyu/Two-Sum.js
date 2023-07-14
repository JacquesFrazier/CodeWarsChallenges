//problem
//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

//For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

//The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//Based on: http://oj.leetcode.com/problems/two-sum/

//twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//answer 1

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//answer 2

function twoSum(numbers, target) {
    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
      let x = numbers[i], y = target - x;
      if (seen.has(y))
        return [seen.get(y), i];
      seen.set(x, i);
    }
  }

//answer 3

function twoSum(numbers, target) {
    console.log([numbers, target]);
    for (var i = 0;i<numbers.length;i++){
      for (var j = i+1;j<numbers.length;j++){
          if (numbers[i]+numbers[j]===target){
              return [i,j];
          }
  
      }
    }
  }

  //answer 4

  const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length - 1; i++)
        for (let j = i + 1; j < numbers.length; j++)
            if (numbers[i] + numbers[j] == target) return [i, j]
}

//answer 5

function twoSum(numbers, target) {
    var seen = {};
    for (var i = 0; i < numbers.length; i++) {
      var current = numbers[i];
      var diff = target - current;
      if (seen.hasOwnProperty(diff)) {
        return [seen[diff], i];
      }
      seen[current] = i;
    }
  }


