//problem 

//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

//The input will be a lowercase string with no spaces.

//Good luck!

//If you like this Kata, please try:

//answer 1

function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};

//answer 2

function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

//answer 3

function capitalize(s) {
  const S = s.toUpperCase()
  let a = ""
  let b = ""
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      a += s[i]
      b += S[i]
    } else {
      a += S[i]
      b += s[i]
    }
  }
  return [a, b]
}

//answer 4

function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};
