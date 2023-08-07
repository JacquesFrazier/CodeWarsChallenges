//problem 

//Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

//answer 1

const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };

//answer 2

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };


//answer 3

const reverseSeq = length => Array.from({length}, () => length--)
