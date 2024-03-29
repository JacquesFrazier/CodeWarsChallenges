//problem
//*** No Loops Allowed ***
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
  
Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

//solution 1
function check(a,x){
  return a.includes(x) ? true : false;
};

//solution 2
function check(a,b){
  return a.includes(b);
};

//solution 3
check = (a,x) => a.indexOf(x) >= 0

//solution 4
check=(a,x)=>a.some(v=>v==x)
