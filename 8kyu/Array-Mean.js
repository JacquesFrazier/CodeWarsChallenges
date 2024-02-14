//problem 
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4

//answer 1
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

//answer 2
var findAverage = function (nums) {
  let total = 0;
   for(let i =0; i < nums.length; i++){
     total += nums[i];
   }
 return total/nums.length
}

//answer 3
var findAverage = function(nums){
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

//answer 4
var findAverage = function (nums) {
  var sum = 0;
  for (num in nums) {
    sum += nums[num];
  }
  return sum / (nums.length);
}
