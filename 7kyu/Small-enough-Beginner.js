//problem 

//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//You can assume all values in the array are numbers.

//answer 1

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

//answer 2

smallEnough = (a, l) => a.every(e => e <= l)

//answer 3

function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

//answer 4

function smallEnough(a, limit){
    for(var i of a){
      if(i > limit)
        return false;
    }
    return true;
}

//answer 5

function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}