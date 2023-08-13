//problem 

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

//answer 1

function removeUrlAnchor(url){
    return url.replace(/\#.*/, '')
  }

//answer 2

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

//answer 3

function removeUrlAnchor(url){
    return url.replace(/#.*/gi,"");
  }