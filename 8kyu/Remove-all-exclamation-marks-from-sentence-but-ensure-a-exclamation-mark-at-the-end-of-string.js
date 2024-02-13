//problem
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"

//answer 1
function remove(s){
  return s.replace(/!/g, '') + "!"
}

//answer 2
function remove (string) {
  let removeexclamation = '!';
  return string.replace(new RegExp(removeexclamation, 'g'), '').concat('!')
}

//answer 3
const remove = s => s.split("!").join("") + "!";

//answer 4
function remove (string) {
  let newArr = string.split('').filter(c => c !== '!').join('')
  return `${newArr}!`  
}
