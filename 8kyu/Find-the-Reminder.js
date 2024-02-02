//problem
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.

//solution 1
function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  return Math.max(n,m) % Math.min(n,m);
}

//solution 2
function remainder(a, b){
  return a > b ? a % b : b % a;
}
