//problem 

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//For example:

//a = 1
//b = 4
//--> [1, 2, 3, 4]

//answer 1

function between(a, b) {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }

//answer 2

const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

//answer 3

function between(a, b) {
    var all = [];
    for(a;a<=b;a++){
      all.push(a);
    }
    return all;
  }