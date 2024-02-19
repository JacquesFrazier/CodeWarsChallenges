//problem 
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
Note: you shouldn't escape the \n, it should work as a new line.

//answer 1
function toCsvText(array) {
   return array.join('\n');
}

//answer 2
function toCsvText(array) {
  var finalStr = ""
   for(let i=0; i< array.length; i++){
     finalStr += array[i].toString() + "\n"
   }
   return finalStr.slice(0, -1)
}

//answer 3
function toCsvText(array) {
let list = '';
let k;
let n = array.length;

  for(let arr of array){
    k = arr.length;
    for(let a of arr){
      list += a;
      k--;
      if(k > 0) list += ',';
    }
    n--;
    if (n > 0) list+= '\n';
  }
  return list;
}
