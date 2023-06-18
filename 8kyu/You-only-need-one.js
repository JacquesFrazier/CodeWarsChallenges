//problem 

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.

//answer 1

function check(a,x){
    return a.includes(x);
  };

//answer 2 (if statment version)

function check(a,x){
    if (a.includes(x)){
    return true}
    else
    return false
  };