//Given a non-empty array of integers, return the result of multiplying the values together in order.

//Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  
//solution 1:
const grow=x=> x.reduce((a,b) => a*b);

//solution 2:
const grows = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };

//solution 3: 
const growss = (nums) => nums.reduce((product, num) => product * num, 1);