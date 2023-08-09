//problem 

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

//answer 1

function getCount(str) {
  let vowels = str.replace(/[bcdfghjklmnpqrstvwxyz]/g, '' ).replace(/\s/g, '')
  return vowels.length
}

//answer 2

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}