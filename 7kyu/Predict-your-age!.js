//problem
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

//answer 1
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let multiages = [age1*age1,age2*age2,age3*age3,age4*age4,age5*age5,age6*age6,age7*age7,age8*age8];
  let total = 0;
  for(let i=0; i < multiages.length; i++){
    total += multiages[i]
  }  
  return Math.floor(Math.sqrt(total)/2)
}

//answer 2
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}

//answer 3
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

//answer 4
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sum = [...arguments]
    .map(x=>x**2)
    .reduce((sum,v)=>sum+v,0)
  return Math.floor( Math.sqrt(sum)/2 )
}
