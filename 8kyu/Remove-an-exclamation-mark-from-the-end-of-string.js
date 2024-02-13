//problem 
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

//answer 1
function remove (string) {
  return (string.charAt(string.length -1) === '!') ? string.slice(0,-1) : string 
}

//answer 2
const remove = s => s.replace(/!$/, '');

//answer 3
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}

//answer 4
function remove(s){
  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}
