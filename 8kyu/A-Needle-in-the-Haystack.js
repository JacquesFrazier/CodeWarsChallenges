

//question 
//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//Example(Input --> Output)

//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//answer 1
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }


//answer 2 (if statement not needed, but its for good practice...lol)
function findNeedle(haystack) {
    if(haystack){
      return "found the needle at position " + haystack.indexOf("needle");
    }
  }


//continue down to pratice...











//pratice 
//question 
//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//Example(Input --> Output)

//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


//solution -> good!

function findNeedle(haystack){
    return "found the needle at position " + haystack.indexOf('needle'); 
}
