Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

//answer 1

function replace(s){
  return s.replace(/[aeiouAEIOU]/gi,"!");  
}

//answer 2

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

//answer 3
