//question
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//example:
// 35231 => [1,3,2,5,3]
// 0 => [0]

//solution 1
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

