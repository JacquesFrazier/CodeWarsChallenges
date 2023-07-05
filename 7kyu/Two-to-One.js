//problem 
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//Examples:
//a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"

//a = "abcdefghijklmnopqrstuvwxyz"
//longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//answer 1
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

//answer 2
function longest(s1, s2) {
    let s3 = s1.split('').sort().join('');
    let s4 = s2.split('').sort().join('');
    let s5 = s3 + s4;
    
    return [...new Set(s5.split(''))].sort().join('');
    
  }
