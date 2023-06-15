//question 
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false


//answer 1

function solution(str, ending){
    return str.endsWith(ending);
  }

//answer 2 (if statement version)

function solution(str, ending){
    if(str.endsWith(ending)) {
        return true;
    } else {
        return false;
    } 
}
