//problem 
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

toBinary(1)  /* should return 1 */
toBinary(5)  /* should return 101 */
toBinary(11) /* should return 1011 */

//answer 1
let toBinary = n => +n.toString(2)

//answer 2
toBinary = (n) => parseInt(n.toString(2));

//answer 3
function toBinary(n){
  return +n.toString(2);
}

//answer 4
const toBinary = n => Number(n.toString(2)) ;

//answer 5
function largestPowerOf(n, number) {
  var p = number;
  while (p < n) { p *= number; }
  return p
}

function toBinary(n) {
  var binaryString = '';
  var power = largestPowerOf(n, 2)
  while (power >= 1) {
    if (n - power >= 0) {
      n -= power;
      binaryString += '1';
    } else {
      binaryString += '0';
    }
    power /= 2;
  }
  return parseInt(binaryString)
}
