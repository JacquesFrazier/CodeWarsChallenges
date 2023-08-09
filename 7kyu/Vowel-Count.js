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

//answer 3

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

//answer 4

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

//answer 5

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
