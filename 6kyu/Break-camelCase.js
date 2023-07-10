//problem
//Complete the solution so that the function will break up camel casing, using a space between words.

//Example
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

//answer 1

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
}

//answer 2

function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach(letter=>{
      if(letter.toUpperCase() == letter)
        res+=" "+letter
      else
        res+=letter
    })
    return res;
}

//answer 3

function solution(string) {
  
    let splitStr = string.split("");
    let upperStr = string.toUpperCase().split("");
    for (i = splitStr.length - 1; i >= 0; i--) {
      if (splitStr[i] === upperStr[i]) {
        splitStr.splice(i, 0, ' ');
      }
    }
    return splitStr.join("");
    
  }