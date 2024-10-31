




//TEST YOUR MIGHT!!!!
//1
//question 
//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//Example(Input --> Output)

//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeddle(haystack){
  return "found the needle at position " + haystack.indexOf('needle');
}

//answer 
function findNeddle(haystack){
  return "found the neddle at position " + haystack.indexOf('neddle'); 
}

//2
//problem
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

function convert(name){
  return name.split(' ').map((name) => name[0]).join('.').toUpperCase();
}

//answer 
function convert(name){
  return name.split(' ').map((name) => name[0].join('.').toUpperCase()
}


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
  return str.split('').filter(x => x === letter).length;
}

//answer 
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

function play(name){
  return name[0].toLowerCase() === 'r' ? name + " plays banjo" : name + " does not play banjo";
}

//answer
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
  return l === w ? l * w : 2 * (l + w)
}

//answer
function lengthWidht(l, w){
  return l === w ? l * w : 2 * (l + w)
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

function findMean(average){
  let total = 0;
  for(let i = 0; i < average.length; i++){
    total += average[i];
  }
  return total/average.length;
}

//answer 
function findMean(average){
  let total = 0;
  for(let i = 0; i < average.length; i++){
    total += average[i]
  }
  return total/average.length
}

//7
//problem

//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7




function arguments(operator, value1, value2){
  switch(operator){
    case '+': 
      return value1 + value2;
    break;
    case '-':
      return value1 - value2;
    break;
    case '*':
      return value1 * value2;
    break;
    case '/':
      return value1 / value2;
    break;
    default: 
      return '0';
    break;
  }
}

//answer 
function arguments(operator, value1, value2){
  switch(operator){
    case "+" :
      return value1 + value2;
    break;
    case '-' :
      return value1 - value2;
    break;
    case '*' : 
       return value1 * value2;
    break;
    case '/' : 
       return value1 / value2;
    break;
    default: 
      return '0';
    break;
  }
}
  
//8
//problem
//In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//You can define the object attributes during initialization, like this:
//var animal={name:"dog"}
//you can also set/get some properties after the object definition, like this:
//var animal={}
//animal.name="dog"  (or animal["name"]="dog")

//Task
//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//and return a string like this:
//"This white dog has 4 legs."
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}


//answer 
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

//9
//problem
//Given an array of integers, return a new array with each value doubled.

//For example:
[1, 2, 3] --> [2, 4, 6]

function int(arr){
  return arr.map((x)=> x*2)
}
function int(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2)
  }
  return newArr;
}

//2 answers
function int(arr){
  return arr.map(x => x * 2)
}

function int(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2)
  }
  return newArr;
}

//10
//problem 
//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

//result = 61000
//Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

function time(h, m, s){
0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

  let millseconds = (h * 3600000) + (m * 60000) + (s * 1000);
  return millseconds;
}

//answer
function time(h, s, m){

  //The constraints probably don't matter 
    0 <= h <= 23;
    0 <= m <= 59;
    0 <= s <= 59;
    
  let milliseconds = (h * 3600000) + (m * 60000) + (s * 1000);
  return milliseconds;
}

//11
//The cockroach is one of the fastest insects. 
//Write a function which takes its speed in km per hour 
//and returns it in cm per second, rounded down to the integer (= floored).

//For example:
1.08 --> 30

//Note! The input is a Real number (actual type is language dependent) and is >= 0. 
//The result should be an Integer.
function speed(km){
  let cm = 27.7778;
  let new = cm * km;
  return new;
}

//answers
function speed(km){
  let cm = 27.7778;
  let new = km * cm;
  return Math.floor(new);
}
//or
function cockroachSpeed(s) {
return Math.floor(s * 27.7778);
}

//12
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//Example:
n= 5, m=5: 25
n=-5, m=5:  0

function classWorkStudent(n, m){
  return n > 0 && m > 0 ? return n * m : 0;
}

//answer
function classWorkStudent(n, m){
  return n > 0 && m > 0 ? n * m : 0;
}


//13
//Complete the function which converts a binary number (given as a string) to a decimal number.

function convertBin(bin){
 return parseInt(bin, 2)
}

//answer
function convertBin(bin){
  return parseInt(bin, 2)
}

//14
//Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

//More details here: https://en.wikipedia.org/wiki/Comma-separated_values
//Note: you shouldn't escape the \n, it should work as a new line.
//Give me 2 solutions 

//solution 1
function cSV(n){
  return n.join('\n')
}

//solution 2
function cSV(n){
  let str = '';
  for(let i = 0; i < n.length; i++){
    str += n[i].toString() + '\n';
  }
  return str.slice(0, -1)
}

//15
//problem 
//Write function bmi that calculates body mass index (bmi = weight / height2).

//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

function bmi(weight, height){
  let calculation = ((weight) / (height * height))
  return calculation <= 18.5 ? "Underweight" : calculation <= 25.0 ? "Normal" : calculation <= 30.0 ? "Overweight" : "Obese";
}

//16
//problem
//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.
//Give me 2 solutions 

//solution 1
function cal(arr){
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;
}

//solution 2
function cal(arr){
  if(arr.length === 0){
    return 0
  }
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}

//17
//problem 
//The first century spans from the year 1 up to 
//and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//Task
//Given a year, return the century it is in.

//Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

function century(cen){
  return Math.ceil(cen/100);
}

//18
//problem 
//Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.

function convert(boolean){
  return boolean ? "true" : "false";
}


//19
//problem 

//We need a function that can transform a string into a number. 
//What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

//solution
function strToNum(str){
  return Number(str)
}

//20
//question
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//solution
function convert(n){
  return n.split(' ');
}


//21
//question
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//solution
function boolean(b){
  return b ? "Yes" : "No";
}


//22
//question
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//example:
// 35231 => [1,3,2,5,3]
// 0 => [0]

//solution 
function digits(n){
  return String(n).split('').map(Number).reverse()
}

//23
//question 
//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

toBinary(1)  /* should return 1 */
toBinary(5)  /* should return 101 */
toBinary(11) /* should return 1011 */

//solution 
function ToBinary(n){
  return parseInt(n.toString(2))
}

//24
//problem
//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

//When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1
//The test cases contain numbers only by mistake.
//Give 2 solutions

//solution 1
function convert(n){
  const correction = {
    '5': 'S',
    '0': 'O', 
    '1': 'I'
  }
  return n.replace(/[501]g/, c => correction[c])
}

//solution 2
function convert(n){
  return n.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
}


//25
//problem 
//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

//solution 

function countBy(n, x){
  let m = 0;
  for(let i = 0; i <= x; i++){
    m += n[i];
  }
  return m;
}


//26
//problem 

//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//solution



//27
//question
//Consider an array/list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array (true means present).

//For example,
 [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
//The correct answer would be 17.

//Hint: Don't forget to check for bad values like null/undefined
//give 2 solutions


//solution 1
function sheep(b){
  return b.filter(Boolean).length;
}

//solution 2

//28
//problem 

//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
//It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

//Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
//RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
//The input string can be of arbitrary length - in particular, it may be empty. 
//All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//solution


//29
//problem 

//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. 
//It is your job to fix the code and get the program working again!

//Example output:

Hello, Mr. Spock

//solution
function starship(name){
  return "Hello, " + name;
}

  
//30
//problem 
//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
//Give me 2 solutions 

//solution 1

function cards(c){
  return 
    c.includes('♣') ? "clubs"
    : c.includes('♦') ? "diamonds"
    : c.includes('♥') ? "hearts"
    : c.includes('♠') ? 'spades'
    : 0;
}


//solution 2



