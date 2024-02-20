//TEST YOUR MIGHT!!!!


//1
//question 
//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//Example(Input --> Output)

//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack){
  return "found the needle at position " + haystack.indexOf("needle");
}


//2
//problem
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F



//3
//problem 
//Create a function that accepts a string and a single character, 
//and returns an integer of the count of occurrences the 2nd argument is found in the first one.

//If no occurrences can be found, a count of 0 should be returned.

//("Hello", "o")  ==>  1
//("Hello", "l")  ==>  2
//("", "z")       ==>  0
//str_count("Hello", 'o'); // returns 1
//str_count("Hello", 'l'); // returns 2
//str_count("", 'z'); // returns 0

function accepts(str, letter){
  return str.split('').filter(x => x === letter).length
} 


//4
//problem 
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.

function playBanjo(name){
  return name[0].toLowerCase() === 'r' ? name + " plays banjo" : name + " does not play banjo"; 
}

//5
//problem
//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

//Example(Input1, Input2 --> Output):

//6, 10 --> 32
//3, 3 --> 9
//Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

function lengthWidth(l, w){
  return l === w ? l*w : 2*(l+w)
}


//6
//problem 
//Find Mean
//Find the mean (average) of a list of numbers in an array.
//Information
//To find the mean (average) of a set of numbers 
//add all of the numbers together and divide by the number of values in the list.

//For an example list of 1, 3, 5, 7
//1. Add all of the numbers

//1+3+5+7 = 16
//2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

//16/4 = 4
//3. The mean (or average) of this list is 4


//7


//8


//9


//10

