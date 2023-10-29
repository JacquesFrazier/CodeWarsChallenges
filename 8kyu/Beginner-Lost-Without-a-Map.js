//problem

//Given an array of integers, return a new array with each value doubled.

//For example:

[1, 2, 3] --> [2, 4, 6]

//answer 1

function maps(x){
 let double = [];
    for(i = 0; i < x.length; i++){
        double.push(x[i] * 2);
    }
return double;
}
//answer 2

function maps(x){
    return x.map(n => n * 2);
  }
















//continue to pratice 

//problem

//Given an array of integers, return a new array with each value doubled.

//For example:

[1, 2, 3] --> [2, 4, 6]


//solution 

function map(x){
    let double = [];
    for(let i = 0; i < x.length; i++){
        double.push(i*2);
    }
    return double;
}

//solution 2

function map(x){
    return x.map((n) => n * 2)
}



