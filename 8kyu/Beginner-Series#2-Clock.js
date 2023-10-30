//problem 

//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

//result = 61000
//Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

//answer 1

function past(h, m, s){
    0 <= h <= 23;
    0 <= m <= 59;
    0 <= s <= 59;
    
    let milliseconds = (h * 3600000) + (m * 60000) + (s * 1000);
    
    return milliseconds; 
    
  }

//answer 2

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }












//continue to pratice

//problem 

//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

//result = 61000
//Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59


//solution

function past(h, m, s){

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

let milliseconds = (3600000 * h) + (60000 * m) + ( 1000 * s);

return milliseconds;
}
